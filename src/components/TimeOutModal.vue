<template>
  <el-dialog
      id="dialog"
      title="Hiệu chỉnh thời gian"
      :visible.sync="status"
      :before-close="handleCancel"
      :show-close="true"
  >
    <!--adjustment time here-->
    <el-form :model="form">
      <el-form-item label="Cập nhật dữ liệu:" :label-width="formLabelWidth">
        <el-input-number
            v-model.lazy="form.timeCallNotify"
            controls-position="right"
            :min="0.1"
            :precision="1"
            :step="0.1"
        ></el-input-number>
        <el-input value="Giờ" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="Cập nhật thông báo:" :label-width="formLabelWidth">
        <el-input-number
            v-model.lazy="form.timeCallData"
            controls-position="right"
            :min="0.1"
            :precision="1"
            :step="0.1"
        ></el-input-number>
        <el-input value="Giờ" :disabled="true"></el-input>
      </el-form-item>
    </el-form>
    <!--Button save and cancel-->
    <span slot="footer" class="dialog-footer">
      <el-button
          type="primary"
          @click="handleSaveTime"
          icon="el-icon-check"
          plain
      >Lưu</el-button
      >
      <el-button
          type="info"
          @click="handleCancel"
          icon="el-icon-close"
          plain
      >Hủy bỏ</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import {setDataToLocalStorage} from '../ultils/functions'

export default {
  name: "TimeOutModal",
  props: {
    dialogFormVisible: Function,
    status: Boolean,
    timeSetting: Object
  },
  data() {
    return {
      form: {
        timeCallNotify: this.timeSetting.callNotify,
        timeCallData: this.timeSetting.callData,
      },
      formLabelWidth: "150px",
    };
  },
  methods: {
    //save time selection of user to localStorage
    handleSaveTime() {
      const {timeCallNotify, timeCallData} = this.form;
      //save time to store
      this.$store.dispatch(
          "updateTimeRequest", {
            timeCallNotify,
            timeCallData,
          });

      return this.dialogFormVisible();
    },
    handleCancel() {
      const {callNotify, callData} = this.timeSetting;

      //setState
      this.form.timeCallNotify = callNotify;
      this.form.timeCallData = callData;

      return this.dialogFormVisible();
    },
    saveToLocal() {
      const {callNotify, callData} = this.timeSetting;
      return setDataToLocalStorage(
          ["timeCallNotify", "timeCallData"], [callNotify, callData]
      )
    }
  },
  created() {
    window.addEventListener('beforeunload', this.saveToLocal);
  },
};
</script>

<style lang="scss">
#dialog {
  .el-dialog {
    margin-top: 25vh !important;
    width: 30%;
    @media (max-width: 1366px) {
      width: 35%;
    }
    @media (max-width: 1200px) {
      width: 40%;
    }
    @media (max-width: 1000px) {
      width: 50%;
    }

    .el-form-item__content {
      display: flex;

      .is-disabled {
        width: 60px !important;
        margin-left: 10px;
      }
    }
  }
}
</style>
