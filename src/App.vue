<template>
    <div class="app-container">
        <TheHeader></TheHeader>
        <TheSideBar></TheSideBar>
        <TheMain
            @showForm="showForm"
            v-model="resetData"
            @deleteEmployee="storeEmployeeId"
        ></TheMain>
        <EmployeeDetail
            v-if="isShow"
            @handleForm="showForm"
            @store="showDialog"
            @data="storeEmployee"
        ></EmployeeDetail>
        <MDialog
            :title="'Cảnh báo'"
            :description="'Bạn có chắc muốn cất không'"
            v-if="isShowDialog"
            @cancel="showDialog"
            @accept="acceptData"
        ></MDialog>
        <MDialog
            :title="'Cảnh báo'"
            :description="'Bạn có chắc muốn xóa không'"
            v-if="isShowDialog"
            @cancel="showDialog"
            @accept="deleteData"
        ></MDialog>
    </div>
</template>

<script>
import TheSideBar from './layouts/TheSideBar/TheSideBar.vue';
import TheHeader from './layouts/TheHeader/TheHeader.vue';
import TheMain from './layouts/TheMain/TheMain.vue';
import EmployeeDetail from './pages/employeeDetail/EmployeeDetail.vue';
import MDialog from './components/MDialog/MDialog.vue';
import axios from 'axios';

export default {
    name: 'App',
    components: {
        TheSideBar,
        TheHeader,
        TheMain,
        EmployeeDetail,
        MDialog,
    },
    methods: {
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để hiển thị form sau khi nhấn nút thêm mới nhân viên trong main
         */
        showForm() {
            this.isShow = !this.isShow;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để hiển thị dialog sau khi cất hoặc cất và thêm trong form employeeDetail
         */
        showDialog() {
            this.isShowDialog = !this.isShowDialog;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để lấy dữ liệu trong form employee ra ngoài để xử lí api
         */
        storeEmployee(employee) {
            this.employee = employee;
        },
        storeEmployeeId(employeeId) {
            this.isShowDialog = !this.isShowDialog;
            this.employeeId = employeeId;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để post (thêm mới nhân viên) sau khi thêm hàm sẽ ẩn dialog và form
         */
        acceptData() {
            this.postEmployee();
            this.isShowDialog = !this.isShowDialog;
            this.isShow = !this.isShow;
        },
        deleteData() {
            console.log(this.employeeId);
            this.deleteEmployee();
            this.isShowDialog = !this.isShowDialog;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm gọi api để thêm mới nhân viên
         */
        postEmployee() {
            axios
                .post('https://cukcuk.manhnv.net/api/v1/Employees', {
                    EmployeeId: 'f3d536fe-9618-11ed-b160-00163e06abee',
                    EmployeeCode: this.employee.code,
                    FirstName: null,
                    LastName: null,
                    FullName: this.employee.name,
                    Gender: this.employee.gender,
                    DateOfBirth: this.employee.dob,
                    PhoneNumber: this.employee.phoneNumber,
                    Email: this.employee.email,
                    Address: this.employee.address,
                    IdentityNumber: this.employee.identity,
                    IdentityDate: this.employee.identityDate,
                    IdentityPlace: this.employee.identityPlace,
                    JoinDate: null,
                    MartialStatus: null,
                    EducationalBackground: null,
                    QualificationId: null,
                    DepartmentId: '45ac3d26-18f2-18a9-3031-644313fbb055',
                    PositionId: null,
                    NationalityId: null,
                    WorkStatus: null,
                    PersonalTaxCode: null,
                    Salary: null,
                    PositionCode: null,
                    PositionName: null,
                    DepartmentCode: 'VT66',
                    DepartmentName: this.employee.department,
                    QualificationName: null,
                    NationalityName: null,
                    GenderName: 'Nam',
                    EducationalBackgroundName: null,
                    MartialStatusName: null,
                    CreatedDate: '2023-01-17T10:42:23',
                    CreatedBy: null,
                    ModifiedDate: null,
                    ModifiedBy: null,
                })
                .then(() => {
                    /***
                     * Created by: Nguyễn Đăng Chiến
                     * Created date: 19/01/2023
                     * Desciption: Hàm làm cho resetData bị biến đổi để kích hoạt hàm reset bên main nhằm làm mới dữ liệu sau khi thêm
                     */
                    this.resetData = !this.resetData;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        /**
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Description: Hàm dùng để xóa nhân viên
         */
        deleteEmployee() {
            axios
                .delete(
                    `https://cukcuk.manhnv.net/api/v1/Employees/${this.employeeId}`,
                    {},
                )
                .then(() => {
                    this.resetData = !this.resetData;
                });
        },
    },
    data() {
        return {
            isShow: false,
            isShowDialog: false,
            employee: {},
            resetData: false,
            employeeId: null,
        };
    },
};
</script>

<style>
@font-face {
    font-family: Roboto Regular;
    src: url(./assets/fonts/Roboto/Roboto-Regular.ttf);
    font-weight: 400;
    font-size: 14px;
}

@font-face {
    font-family: Roboto Bold;
    src: url(./assets/fonts/Roboto/Roboto-Bold.ttf);
    font-weight: 700;
    font-size: 14px;
}

@font-face {
    font-family: Roboto Medium;
    src: url(./assets/fonts/Roboto/Roboto-Medium.ttf);
    font-weight: 500;
    font-size: 14px;
}

@font-face {
    font-family: Roboto Italic;
    src: url(./assets/fonts/Roboto/Roboto-Italic.ttf);
    font-weight: 500;
    font-size: 14px;
}

body {
    margin: 0;
    font-family: Roboto Regular;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 14px;
}

.app-container {
    display: flex;
    flex-wrap: wrap;
}
</style>
