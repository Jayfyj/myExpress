// 创建用户集合
// 引入mongoose第三方模块
const mongoose = require('mongoose');

// 创建用户集合规则
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 20
	}
});

// 创建集合
const User1 = mongoose.model('User1', userSchema);


// 将用户集合做为模块成员进行导出
module.exports = {
	User1
}