$(function() {
    //1 给文本框设置键盘事件
    // 获取enter（事件对象） 键的Ask码 
    load(); //  页面初始化加载
    $('#title').on('keydown', function(e) {
        //  判断按下的键是不是enter
        if (e.keyCode == 13) {
            if ($(this).val() === '') {
                alert('请输入您要的操作');
            } else {
                //  调用封装好的函数
                var local = getDate();
                //  // 把local数组进行更新数据 把最新的数据追加给local数组
                local.push({ title: $(this).val(), done: false });
                // 把这个数组local 存储给本地存储
                saveDate(local);
                // 2. toDoList 本地存储数据渲染加载到页面
                load();
                $(this).val();
            };
        };
    });
    // 3. toDoList 删除操作
    $("ol,ul").on("click", "a", function() {

            // 首先读取本存数据
            var data = getDate();
            //  修改数据
            var index = $(this).attr("id"); //  获取当前点击事件对象的索引id
            // splice 函数 从第几个开始，删几个
            data.splice(index, 1);

            // 数据把这个保存到本存 调用函数
            saveDate(data);
            //  重新渲染
            load();

        })
        // 4 todoList 正在进行和已经完成的选项操作

    $("ul,ol").on("click", "input", function() {
        //   获取本地数据
        var data = getDate();
        //  修改数据
        var index = $(this).siblings("a").attr("id"); //获取自定义属性a的id


        data[index].done = $(this).prop("checked");

        // 保存
        saveDate(data);
        // 重新加载
        load();

    })


    // 读取本存数据
    function getDate() {
        // 变量接收获取到的本存
        var data = localStorage.getItem('todolist');
        if (data !== null) {
            // 如果不是空值 就输出
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    // 封装函数  保存本存数据
    function saveDate(data) {
        localStorage.setItem('todolist', JSON.stringify(data))
    };

    // 渲染加载数据
    function load() {
        //  读取本存
        var data = getDate();
        // console.log(data);
        //  遍历前线清空ol，ul 里面的数据
        $('ul,ol').empty();
        var doneCount = 0;
        var todoCount = 0;
        // 遍历data 这个本存的数据
        //  字符串拼接应该是外单 内单 外双内双  ----------
        $.each(data, function(i, n) {

            if (n.done) {
                $('ul').prepend('<li><input type="checkbox" checked="checked"> <p> ' + n.title + ' </p><a href ="javascript:;" id = ' + i + ' </a></li>');
                doneCount++;
            } else {
                $('ol').prepend('<li><input type="checkbox"><p> ' + n.title + ' </p><a href ="javascript:;" id = ' + i + ' </a></li>');
                todoCount++;
            }
        });
        $('#todocount').text(todoCount);
        $('#donecount').text(doneCount);
    }


})