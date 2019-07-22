<template>
	<div>
		<div class="el-col el-col-4 el-col-sm-4">
			<div>江苏天圣评估管理系统</div>
			<div><img src="" alt=""></div>
			<div>
				<el-button type="primary" @click="jumpToTs()">跳转</el-button>
			</div>
		</div>
		<div class="el-col el-col-4 el-col-sm-4">
			<div>江苏天圣评估审核系统</div>
			<div><img src="" alt=""></div>
			<div>
				<el-button type="primary" @click="jumpToSh()">跳转</el-button>
			</div>
		</div>
		<div class="el-col el-col-4 el-col-sm-4">
			<div>江苏天圣评估权限系统</div>
			<div><img src="" alt=""></div>
			<div>
				<el-button type="primary" @click="jumpToQx()">跳转</el-button>
			</div>
		</div>
	</div>
</template>

<script>
import { getInfoList, getRoleList } from '@/api/login'
// import Cookies from 'js-cookie'
// import { getToken } from '@/utils/auth'
export default{
	data () {
		return {}
	},
	methods: {
		jumpToTs () {
			window.open("http://fcpgpre.jstspg.com/ts/", '_blank')
			// console.log(token);
			// let para = 1;
			// // console.log()
			// getInfoList(para).then( res => {
			// 	console.log(res);
			// 	let user = res.data;
			// 	// user = JSON.stringify(user);
			// 	getRoleList(user).then( res => {
			// 		console.log(res);
			// 	})
			// })
		},
		jumpToSh () {
			window.open("http://fcpgpre.jstspg.com/sh", '_blank')
		},
		jumpToQx() {
			window.open("http://fcpgpre.jstspg.com/auth-portal/pages/login/login.html", '_blank')
		}
	}
}
</script>

<style>
</style>
