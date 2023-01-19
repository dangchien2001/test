var comon = {
    formatDate(datetime) {
        try {
            if (datetime != null && datetime != undefined) {
                // Chuyển thành dữ liệu ngày tháng;
                datetime = new Date(datetime);
                let date = datetime.getDate();
                date = date < 10 ? `0${date}` : date;
                let month = datetime.getMonth() + 1;
                month = month < 10 ? `0${month}` : month;
                let year = datetime.getFullYear();
                return `${date}/${month}/${year}`;
            } else {
                return '';
            }
        } catch (error) {
            return '';
        }
    },
    formatMoney() {},
    formatDateForDateInput(datetime) {
        try {
            if (datetime != null && datetime != undefined) {
                // Chuyển thành dữ liệu năm - tháng - ngày;
                datetime = new Date(datetime);
                let date = datetime.getDate();
                date = date < 10 ? `0${date}` : date;
                let month = datetime.getMonth() + 1;
                month = month < 10 ? `0${month}` : month;
                let year = datetime.getFullYear();
                return `${year}-${month}-${date}`;
            } else {
                return '';
            }
        } catch (error) {
            return '';
        }
    },
    formatGender(genderName) {
        try {
            if (genderName != null && genderName != undefined) {
                if (genderName == 'Nam') {
                    return 0;
                }
                if (genderName == 'Nữ') {
                    return 1;
                }
                if (genderName == 'Khác') {
                    return 2;
                }
            }
        } catch (error) {
            return '';
        }
    },
};

export default comon;
