import { defineNuxtPlugin } from '#app'
import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
  console.log('axios Plugin injected by my-module!')
  return {
    provide: { axios, doxHttp: axios }
  };
})
