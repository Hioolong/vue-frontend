export default function (Vue) {
    // 定义了一个日期过滤器
    Vue.filter('date', function (tplData) {
        var date = new Date(tplData);
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    })
}