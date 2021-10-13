<template>
  <el-dialog
      id="dialog"
      title="Hiệu chỉnh thời gian"
      :visible.sync="status"
      :before-close="handleUpdateTime"
      :show-close="false"
  >
    <el-form :model="form">
      <el-form-item label="Cập nhật dữ liệu:" :label-width="formLabelWidth">
        <el-input-number
            v-model="form.timeCallData"
            controls-position="right"
            :min="0" :precision="1"
            :step="0.1"
        ></el-input-number>
        <el-input value="Giờ" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="Cập nhật thông báo:" :label-width="formLabelWidth">
        <el-input-number v-model="form.timeCallNotify" controls-position="right" :min="0" :precision="1" :step="0.1"></el-input-number>
        <el-input value="Giờ" :disabled="true"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="handleSaveTime" icon="el-icon-check" plain>Lưu</el-button>
    <el-button type="info" @click="handleUpdateTime" icon="el-icon-close" plain>Hủy bỏ</el-button>
  </span>
  </el-dialog>
</template>

<script>
import {getDataToLocalStorage, hourToMs, msToHour} from "../ultils/functions"

let notifyTime = 'timeCallNotify';
let dataTime = 'timeCallData';

export default {
  name: "TimeOutModal",
  props: ['dialogFormVisible', 'status'],
  data() {
    return {
      form: {
        timeCallNotify: 1,
        timeCallData: 1
      },
      formLabelWidth: '150px'
    }
  },
  methods: {
    //save time selection of user to localStorage
    handleSaveTime(){
      const {timeCallNotify,timeCallData} = this.form;

      //convert hour to millisecond
      let convertTimeCallData = hourToMs(timeCallData);
      let convertTimeCallNotify = hourToMs(timeCallNotify);

      //save time to store
      this.$store.dispatch("updateTimeData", {convertTimeCallData, convertTimeCallNotify})

      return this.dialogFormVisible();
    },
    //Roll back data in localStorage
    handleUpdateTime(lifecycle){
      let getLocal = getDataToLocalStorage(dataTime, notifyTime);

      //Convert millisecond to hour
      this.form.timeCallData = msToHour(getLocal[`${dataTime}`]);
      this.form.timeCallNotify = msToHour(getLocal[`${notifyTime}`]);

      //Case update when the first time open this modal
      if(lifecycle === "mounted"){
        return;
      }
      return this.dialogFormVisible()
    },
  },
  mounted() {
    this.handleUpdateTime("mounted")
  }
}
</script>

<style lang="scss">
#dialog {
  .el-dialog {
    margin-top: 25vh !important;
    width: 30%;
    .el-form-item__content{
      display: flex;
      .is-disabled {
        width: 60px !important;
        margin-left: 10px;
      }
    }
  }

}
</style>
