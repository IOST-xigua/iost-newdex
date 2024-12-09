import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zh_cn from './zh_cn';
import zh_hk from './zh_hk';
import en_us from './en_us';
import ko_kp from './ko_kp';
import ru_ru from './ru_ru';

Vue.use(VueI18n);

const messages = {
  zh_cn,
  zh_hk,
  en_us,
  ko_kp,
  ru_ru,
};

// 获取浏览器语言
let lang = (navigator.language || navigator.userLanguage).toLowerCase();

// 根据浏览器语言设置默认语言
if (lang && localStorage.getItem('language_id') === null) {
  if (lang.toLowerCase().indexOf('zh-cn') >= 0) {
    localStorage.setItem('language_id', 'zh_cn');
  } else if (lang.toLowerCase().indexOf('zh-') >= 0) {
    localStorage.setItem('language_id', 'zh_hk');
  } else if (lang.toLowerCase() === 'ko' || lang.indexOf('ko-') >= 0) {
    localStorage.setItem('language_id', 'ko_kp');
  } else if (lang.toLowerCase() === 'ru' || lang.indexOf('ru-') >= 0) {
    localStorage.setItem('language_id', 'ru_ru');
  } else {
    localStorage.setItem('language_id', 'en_us');
  }
}

let language_id = localStorage.getItem('language_id') || 'en_us';

// 创建 i18n 实例
export default new VueI18n({
  locale: language_id, // 设置默认语言
  messages,
});
