<template>
    <div class="employee-detail-layer">
        <div class="employee-detail-form">
            <div class="employee-detail-header">
                <div class="employee-detail-title">Thông tin nhân viên</div>
                <div class="employee-object">
                    <MCheckbox></MCheckbox>
                    <div class="employee-object-name">Là khách hàng</div>
                    <MCheckbox></MCheckbox>
                    <div class="employee-object-name">Là nhà cung cấp</div>
                </div>
                <div class="blank"></div>
                <div class="btn-container">
                    <div class="sp-btn">
                        <div class="sp-icon"></div>
                    </div>
                    <div class="exit-btn" @click="isShow">
                        <div class="exit-icon"></div>
                    </div>
                </div>
            </div>
            <div class="employee-detail-body">
                <div class="employee-detail-body-left-right">
                    <div class="id-name">
                        <div class="label-input">
                            <div class="label">Mã</div>
                            <MInput
                                refs="focusMe"
                                style="width: 100%"
                                v-model="this.employee.code"
                            ></MInput>
                        </div>
                        <div class="label-input">
                            <div class="label">Tên</div>
                            <MInput
                                style="width: 100%"
                                v-model="this.employee.name"
                            ></MInput>
                        </div>
                    </div>
                    <!-- Đầu vào của các combobox bao gồm api dữ liệu, hàm select để emit dữ liệu ra ngoài và tên trường của combobox đó -->
                    <div class="deparment">
                        <div class="label">Đơn vị</div>
                        <MCombobox
                            style="width: 100%"
                            :data="'https://cukcuk.manhnv.net/api/v1/Departments'"
                            :parameter="'DepartmentName'"
                            @selected="selectDepartment"
                        ></MCombobox>
                    </div>
                    <div class="deparmen position">
                        <div class="label">Chức danh</div>
                        <MCombobox
                            style="width: 100%"
                            :data="'https://cukcuk.manhnv.net/api/v1/Positions'"
                            :parameter="'PositionName'"
                            @selected="selectPosition"
                        ></MCombobox>
                    </div>
                </div>
                <div class="employee-detail-body-left-right">
                    <div class="id-name">
                        <div class="label-input">
                            <div class="label">Ngày sinh</div>
                            <MDatePicker
                                @datePicker="datePicker"
                                @handleDatePicker="datePicker"
                                v-model="this.employee.dob"
                            ></MDatePicker>
                        </div>
                        <div class="label-input">
                            <div class="label">Giới tính</div>
                            <MGender @emitGenderId="selectGender"></MGender>
                        </div>
                    </div>
                    <div class="id-name">
                        <div class="label-input">
                            <div class="label">Số CMND</div>
                            <MInput
                                style="width: 100%"
                                v-model="this.employee.identity"
                                type="number"
                            ></MInput>
                        </div>
                        <div class="label-input">
                            <div class="label">Ngày cấp</div>
                            <MDatePicker
                                @datePicker="datePickerIdentityDate"
                                @handleDatePicker="datePickerIdentityDate"
                                v-model="this.employee.identityDate"
                            ></MDatePicker>
                        </div>
                    </div>
                    <div class="deparmen position">
                        <div class="label">Nơi cấp</div>
                        <MInput
                            style="width: 100%"
                            v-model="this.employee.identityPlace"
                        ></MInput>
                    </div>
                </div>
                <div class="deparmen position">
                    <div class="label">Đia chỉ</div>
                    <MInput
                        style="width: 100%"
                        v-model="this.employee.address"
                    ></MInput>
                </div>
                <div class="group-input">
                    <div class="deparmen position" style="width: 200px">
                        <div class="label">ĐT di động</div>
                        <MInput
                            style="width: 100%"
                            v-model="this.employee.phoneNumber"
                            type="number"
                        ></MInput>
                    </div>
                    <div class="deparmen position" style="width: 200px">
                        <div class="label">ĐT cố định</div>
                        <MInput
                            style="width: 100%"
                            v-model="this.employee.phoneCompany"
                            type="number"
                        ></MInput>
                    </div>
                    <div class="deparmen position" style="width: 200px">
                        <div class="label">Email</div>
                        <MInput
                            style="width: 100%"
                            v-model="this.employee.email"
                        ></MInput>
                    </div>
                </div>
                <div class="group-input">
                    <div class="deparmen position" style="width: 200px">
                        <div class="label">Tài khoản ngân hàng</div>
                        <MInput style="width: 100%"></MInput>
                    </div>
                    <div class="deparmen position" style="width: 200px">
                        <div class="label">Tên ngân hàng</div>
                        <MInput style="width: 100%"></MInput>
                    </div>
                    <div class="deparmen position" style="width: 200px">
                        <div class="label">Chi nhánh</div>
                        <MInput style="width: 100%"></MInput>
                    </div>
                </div>
            </div>
            <div class="employee-detail-footer">
                <MButton class="cancel-btn" @click="isShow">Hủy</MButton>
                <div class="blank"></div>
                <MButton
                    class="cancel-btn"
                    style="margin-right: 12px"
                    @click="store"
                    >Cất</MButton
                >
                <MButton class="add-btn" @click="store">Cất và thêm</MButton>
            </div>
        </div>
    </div>
</template>
<script>
import MCheckbox from '@/components/MCheckbox/MCheckbox.vue';
import MInput from '@/components/MInput/MInput.vue';
import MCombobox from '../../components/MInput/MCombobox.vue';
import MDatePicker from '../../components/MDatePicker/MDatePicker.vue';
import MGender from '@/components/MGenderBox/MGender.vue';
import MButton from '@/components/MButton/MButton.vue';
import axios from 'axios';
export default {
    name: 'EmployeeDetail',
    components: {
        MCheckbox,
        MInput,
        MCombobox,
        MDatePicker,
        MGender,
        MButton,
    },
    methods: {
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để lấy dữ liệu ngày sinh được emit ra bên ngoài của datePicker
         */
        datePicker(value) {
            this.employee.dob = value;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để lấy dữ liệu ngày cấp CMND được emit ra bên ngoài của datePicker
         */
        datePickerIdentityDate(value) {
            this.employee.identityDate = value;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để ẩn hiện form (chính nó)
         */
        isShow() {
            this.$emit('handleForm');
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để lấy dữ liệu đơn vị được emit ra bên ngoài của combobox
         */
        selectDepartment(department) {
            this.employee.department = department;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để lấy dữ liệu vị trí được emit ra bên ngoài của combobox
         */
        selectPosition(position) {
            this.employee.position = position;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để lấy dữ liệu giới tính vị trí được emit ra bên ngoài của radio
         */
        selectGender(genderId) {
            this.employee.gender = genderId;
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để lấy dữ liệu vị trí được emit ra bên ngoài của combobox
         */
        store() {
            this.$emit('store');
            this.$emit('data', this.employee);
        },
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để emit dữ liệu employee ra ngoài để dialog hứng, đồng thời hàm cũng emit tín hiện để hiện dialog ra ngoài bằng store.
         */
    },
    watch: {
        /***
         * Created by: Nguyễn Đăng Chiến
         * Created date: 19/01/2023
         * Desciption: Hàm dùng để log các dữ liệu đã được ghi trong form
         */
        employee: {
            handler(newValue) {
                console.log(newValue);
            },
            deep: true,
        },
    },
    created() {
        /**
         * Created by: Nguyễn Đăng Chiến
         * Created date: 29/01/2023
         * Description: Hàm dùng để lấy employeeCode lớn nhất + 1 rồi focus vào trường mã nhân viên sau khi mở form
         */
        try {
            axios
                .get('https://cukcuk.manhnv.net/api/v1/employees')
                .then((response) => {
                    const code = response.data.map((employee) => {
                        return employee.EmployeeCode.replace(/[^0-9]/g, '');
                    });
                    const max = Math.max(...code);
                    this.employee.code = 'NV-' + (max + 1);
                });
        } catch (error) {
            console.log(error);
        }
    },
    data() {
        return {
            employee: {
                code: '',
                name: null,
                department: null,
                position: null,
                dob: '2001-01-10',
                gender: null,
                identity: null,
                identityDate: null,
                identityPlace: null,
                address: null,
                phoneNumber: null,
                phoneCompany: null,
                email: null,
            },
            datas: {},
        };
    },
};
</script>
<style scoped>
@import url(./employeeDetail.css);
</style>
