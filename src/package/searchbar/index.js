import SearchBar from './src/searchbar.vue';

SearchBar.install = function(Vue) {
  Vue.component(SearchBar.name, SearchBar);
};

export default SearchBar