import comon from './comon';
var resource = {
    /**
     * Created date: 13/01/2023
     * Created by: Nguyễn Đăng Chiến
     * Description: Object chứa các phần tử sidebar bao gồm: Text, Icon, trạng thái active
     */
    sidebarItems: [
        {
            sidebarText: 'Tổng quan',
            sidebarIcon: 'lobby',
            sidebarActive: '',
        },
        {
            sidebarText: 'Tiền mặt',
            sidebarIcon: 'money',
            sidebarActive: 'active',
        },
        {
            sidebarText: 'Tiền gửi',
            sidebarIcon: 'giveMoney',
            sidebarActive: '',
        },
        {
            sidebarText: 'Mua hàng',
            sidebarIcon: 'shopping',
            sidebarActive: '',
        },
        {
            sidebarText: 'Bán hàng',
            sidebarIcon: 'sale',
            sidebarActive: '',
        },
        {
            sidebarText: 'Quản lý hóa đơn',
            sidebarIcon: 'invoice',
            sidebarActive: '',
        },
        {
            sidebarText: 'Kho',
            sidebarIcon: 'warehouse',
            sidebarActive: '',
        },
        {
            sidebarText: 'Công cụ dụng cụ',
            sidebarIcon: 'tool',
            sidebarActive: '',
        },
        {
            sidebarText: 'Tài sản cố định',
            sidebarIcon: 'asset',
            sidebarActive: '',
        },
        {
            sidebarText: 'Thuế',
            sidebarIcon: 'tax',
            sidebarActive: '',
        },
        {
            sidebarText: 'Giá thành',
            sidebarIcon: 'price',
            sidebarActive: '',
        },
        {
            sidebarText: 'Tổng hợp',
            sidebarIcon: 'total',
            sidebarActive: '',
        },
        {
            sidebarText: 'Ngân sách',
            sidebarIcon: 'budget',
            sidebarActive: '',
        },
        {
            sidebarText: 'Báo cáo',
            sidebarIcon: 'report',
            sidebarActive: '',
        },
        {
            sidebarText: 'Báo cáo',
            sidebarIcon: 'finance',
            sidebarActive: '',
        },
    ],
    /**
     * Created date: 13/01/2023
     * Created by: Nguyễn Đăng Chiến
     * Description: Object chứa các phần tử header của table employees bao gồm:
     *  - title, style (chiều rộng, căn chỉnh text với các tiêu chí: ngày, tháng căn giữa, tiền, dữ liệu số: căn phải, text căn trái )
     * Updated: 13/01/2023 : chỉnh sửa kích thước, thêm một số style để sticky
     * Updated: 14/01/2023: Loại bỏ thuộc tính width trong đối tượng tránh nhầm lẫn
     * Updated: 19/01/2023: chỉnh lại kích thước genderName cho phù hợp 100 -> 150
     */
    columns: [
        // {
        //     title: '',
        //     style: 'min-width: 20px; text-align: center; position: sticky; top: 0; left: 0',
        // },
        {
            title: 'Mã nhân viên',
            style: 'min-width: 150px; text-align: left; position: sticky; top: 0; left: 41px',
        },
        {
            title: 'Tên nhân viên',
            // width: '200px',
            style: 'min-width: 250px; text-align: left; position: sticky; top: 0; left: 191px',
        },
        {
            title: 'Giới tính',
            // width: '200px',
            style: 'min-width: 150px; text-align: left',
        },
        {
            title: 'Ngày sinh',
            // width: '200px',
            style: 'min-width: 150px; text-align: center',
        },
        {
            title: 'Số CMND',
            // width: '200px',
            style: 'min-width: 200px; text-align: left',
        },
        {
            title: 'Chức danh',
            // width: '100px',
            style: 'min-width: 200px; text-align: left',
        },
        {
            title: 'Tên đơn vị',
            // width: '200px',
            style: 'min-width: 250px; text-align: left',
        },
        {
            title: 'Số tài khoản',
            // width: '200px',
            style: 'min-width: 200px; text-align: left',
        },
        {
            title: 'Tên ngân hàng',
            // width: '200px',
            style: 'min-width: 200px; text-align: left',
        },
        {
            title: 'Chi nhánh TK ngân hàng',
            // width: '200px',
            style: 'min-width: 200px; text-align: left; border-right: 0px',
        },
        {
            title: 'Chức năng',
            // width: '100px',
            style: 'min-width: 100px; text-align: center; position: sticky; top: 0; right: 0',
        },
    ],
    /**
     * Created date: 13/01/2023
     * Created by: Nguyễn Đăng Chiến
     * Description: object chứa một vài dữ liệu employee phục vụ việc test
     */
    dataTests: [
        {
            EmployeeId: 'a2853d39-930c-11ed-837d-00163e06abee',
            EmployeeCode: 'NV-359500',
            FirstName: null,
            LastName: null,
            FullName: 'Nguyễn Văn Dương Quá đỉnh',
            Gender: 0,
            DateOfBirth: null,
            PhoneNumber: null,
            Email: null,
            Address: null,
            IdentityNumber: null,
            IdentityDate: null,
            IdentityPlace: null,
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
            DepartmentName: 'Phòng Hành Chính',
            QualificationName: null,
            NationalityName: null,
            GenderName: 'Nam',
            EducationalBackgroundName: null,
            MartialStatusName: null,
            CreatedDate: '2023-01-13T13:36:39',
            CreatedBy: null,
            ModifiedDate: null,
            ModifiedBy: null,
        },
        {
            EmployeeId: 'a11e27ca-930b-11ed-837d-00163e06abee',
            EmployeeCode: 'NV-994953',
            FirstName: null,
            LastName: null,
            FullName: 'Nguyen van DDdsada',
            Gender: 1,
            DateOfBirth: '2023-01-06T00:00:00',
            PhoneNumber: '0328669789',
            Email: 'aa333123213@gmail.com',
            Address: '1248 W Fox Hill Dr, Boston, MA, 36801',
            IdentityNumber: '934997812497',
            IdentityDate: null,
            IdentityPlace: 'Tuyên Quang',
            JoinDate: null,
            MartialStatus: null,
            EducationalBackground: null,
            QualificationId: null,
            DepartmentId: '3f8e6896-4c7d-15f5-a018-75d8bd200d7c',
            PositionId: '589edf01-198a-4ff5-958e-fb52fd75a1d4',
            NationalityId: null,
            WorkStatus: null,
            PersonalTaxCode: null,
            Salary: null,
            PositionCode: 'VT-92',
            PositionName: 'Nhân viên',
            DepartmentCode: 'NL20',
            DepartmentName: 'Phòng Công Nghệ Thông Tin',
            QualificationName: null,
            NationalityName: null,
            GenderName: 'Nữ',
            EducationalBackgroundName: null,
            MartialStatusName: null,
            CreatedDate: '2023-01-13T13:29:27',
            CreatedBy: null,
            ModifiedDate: '2023-01-13T13:36:44',
            ModifiedBy: null,
        },
    ],
    /**
     * Created date: 13/01/2023
     * Created by: Nguyễn Đăng Chiến
     * Description: hàm format dữ liệu để khớp với bảng employee
     * Updated: 13/01/2023: thêm thuộc tính style vào mỗi đối tượng để căn lề
     * 13/01/2023: thêm một số chỉnh sửa style phục vụ sticky
     * 19/01/2023: thêm trường id xóa trường bankNam phục vụ cho chức năng xóa
     */
    formatData(dataTests) {
        return dataTests.map((dataTest) => {
            return {
                EmployeeCode: {
                    style: 'position: sticky; top:0; left: 41px;',
                    data: dataTest.EmployeeCode,
                },
                FullName: {
                    style: 'position: sticky; top:0; left: 191px;',
                    data: dataTest.FullName,
                },
                GenderName: {
                    style: '',
                    data: dataTest.GenderName,
                },
                DateOfBirth: {
                    style: 'text-align: center',
                    data: comon.formatDate(dataTest.DateOfBirth),
                },
                IdentityNumber: {
                    style: '',
                    data: dataTest.IdentityNumber,
                },
                PositionName: {
                    style: '',
                    data: dataTest.PositionName,
                },
                DepartmentName: {
                    style: '',
                    data: dataTest.DepartmentName,
                },
                BankNumber: {
                    style: '',
                    data: null,
                },
                EmployeeId: {
                    id: dataTest.EmployeeId,
                },
                BankPlace: {
                    style: 'border-right: 0px',
                    data: null,
                },
            };
        });
    },
};

export default resource;
