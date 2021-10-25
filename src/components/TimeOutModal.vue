<template>
  <el-dialog
      id="dialog"
      title="Hiệu chỉnh thời gian"
      :visible.sync="status"
      :before-close="handleCancel"
      :show-close="false"
  >
    <!--adjustment time here-->
    <el-form :model="form" label-position="left">
      <el-form-item label="Cập nhật dữ liệu:" :label-width="formLabelWidth">
        <el-input-number
            v-model.lazy="form.timeCallNotify"
            controls-position="right"
            :min="0.1"
            :precision="1"
            :step="0.5"
        ></el-input-number>
        <el-input
            :value="value ? 'Phút' : 'Giờ'"
            class="dialog-input__display-time"
        ></el-input>
      </el-form-item>
      <el-form-item label="Cập nhật thông báo:" :label-width="formLabelWidth">
        <el-input-number
            v-model.lazy="form.timeCallData"
            controls-position="right"
            :min="0.1"
            :precision="1"
            :step="0.5"
        ></el-input-number>
        <el-input
            :value="value ? 'Phút' : 'Giờ'"
            class="dialog-input__display-time"
        ></el-input>
      </el-form-item>
<!--      <el-switch-->
<!--          v-model="value"-->
<!--          active-color="#164399"-->
<!--      >-->
<!--      </el-switch>-->
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
    updateTime: Function,
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
      value: false
    };
  },
  methods: {
    //save time selection of user to localStorage
    handleSaveTime() {
      const {timeCallNotify, timeCallData} = this.form;
      this.$notify({
        title: 'Lưu thành công',
        message: '<p>Cập nhật dữ liệu là <b>15p/lần</b> <br/> Cập nhật thông báo là <b>60p/lần</b></p>',
        dangerouslyUseHTMLString: true,
        type: 'success',
        showClose: false,
        position: 'bottom-right',
        offset: 45
      });

      //save time to store
      this.updateTime({timeCallNotify, timeCallData});
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
    border-radius: 4px;
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
    }

    .dialog-input__display-time {
      width: 60px;
      margin-left: 15px;

      input {
        padding: 0 10px;
        text-align: center;
        font-family: inherit;
        color: #3f51b5;
        cursor: not-allowed;
        pointer-events: none;
        border: none;
      }
    }
  }
}
</style>
