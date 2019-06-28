<template>
<div class="about-container">
   <about-component :users="users"></about-component>
</div>
</template>

<script>
import getService from '../../apiService/getService'
import { Observable } from "rxjs/Rx";
import { from, range, merge, concat, interval, of } from "rxjs";
import {
    map,
    tap,
    filter,
    flatMap,
    refCount,
    distinct,
    contains,
    catchError,
    pluck,
    publishReplay,
    retry,
    last,
    first,
    toArray,
    concatAll
} from "rxjs/operators";

import about from './About'
export default {
name: "AboutContainer",
    components: {
        "about-component": about,
    },
    data() {
        return {
            baseUrl: process.env.VUE_APP_BASE_URL,
            users: []
        }
    },
    created() {
        console.log('about-created');
        this.getData()
    },
    methods: {
        getData() {
            let popUpGroupList$ = getService.getHlmUsers(this.baseUrl)
                .subscribe(
                    next => {
                        this.users = next.response.hlm_users
                    },
                    error => {
                        console.log(error)
                    },
                    () => console.log("recieved hlm users")
                );
        }
    }
}
</script>

<style>

</style>
