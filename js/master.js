
//我的账户
$(function () {
//            手机号码
                function checkPhoneNum(obj) {
                    if (/^((\d{3}-\d{8}|\d{4}-\d{7,8})|(1[3|5|7|8][0-9]{9}))$/.test(obj)) {
                        return true;
                    }
                }

//         密码
                function verifyPassword(obj) {
                    if (/^[a-z0-9_-]{5,18}$/.test(obj)) {
                        return true;
                    }
                }
            });





//首页侧边栏
window.onscroll = window.onload = function () {
                var btn = document.getElementById("btn");
                var timer = null;
                var ko = document.documentElement.scrollTop || document.body.scrollTop;
                btn.onclick = function () {
                    timer = setInterval(function () {
                        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                        var ispeed = Math.floor(-scrollTop / 5);
                        if (scrollTop === 0) {
                            clearInterval(timer);
                        }
                        document.documentElement.scrollTop = document.body.scrollTop = scrollTop + ispeed;
                    }, 60);
                };
            };


            $(function () {
                $('.sidebar div').hover(function () {
                    // alert("123");
                    $(this).animate({
                        width: '150',
                        marginLeft: '-125px'
                    }, 'fast');
                }, function () {
                    $(this).animate({
                        width: '35',
                        marginLeft: '0'
                    }, 'fast');
                });
            });