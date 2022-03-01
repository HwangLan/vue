import $ from "jquery";

//导入css文件
import './css/index.css'
import './css/index.less'


$(function(){
    $('li:odd').css('backgroundColor','red');
    $('li:even').css('backgroundColor','cyan');  
})



class Person {
    static info = "person info"
}

console.log(Person.info);