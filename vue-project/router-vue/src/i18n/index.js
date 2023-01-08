import ENi18n from 'element-ui/lib/locale/lang/en'
import CNi18n from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale/index'
import I18n from 'vue-i18n'

//use(I18n)
import Vue from 'vue'
Vue.use(I18n);

const lang = {
    cn:{
        msg:{
            login:'登录',
            username:'用户名：',
            passwd:'密码：',
            remeber:'记住密码',
            pleaseName:'请输入用户名',
            pleasePass:'请输入密码',
            forget:'忘记密码',
            logout:'退出登录',
            welcome:'欢迎登录！',
            home:'首页',
            work:'我的工作台',
            messages:'消息中心',
            yuQue:'语雀知识库',
            presonCenter:'个人中心',
            presonInfo:'个人信息',
            weatherInfo:'天气信息',
            calendar:'日历',
            respon:'仓库',
            table:'表格',

        },
        ...CNi18n,
    },
    en:{
        msg:{
            login:'Log In',
            username:'Username:',
            passwd:'Password:',
            remeber:'remember password',
            pleaseName:'Please enter a username',
            pleasePass:'Please enter a password',
            forget:'forget pass',
            logout:'log out',
            welcome:'Welcome To Login!',
            home:'Homepage',
            work:'My workbench',
            messages:'Message center',
            yuQue:'Knowledge Base of YuQue',
            presonCenter:'Personal Center',
            presonInfo:'Personal Information',
            weatherInfo:'Weather information',
            calendar:'Calendar',
            respon:'Respositities',
            table:'Tables',
        },
        ...ENi18n,   
    }
}

const i18n = new I18n({
    locale: 'en',
    messages: lang
})

ElementLocale.i18n((key, value) => i18n.t(key, value));

export default i18n