<template>
    <div>
        <button @click="newWindow">{{createSuspension ? '隐藏悬浮窗' : '显示悬浮窗' }}</button>
    </div>
</template>

<script>
    export default {
        name: "home",
        mounted() {
            if (this.createSuspension === true) {
                this.$electron.ipcRenderer.send('showSuspensionWindow');
            }

            this.$electron.ipcRenderer.on('hideSuspension', (e, data) => {
                this.$store.dispatch('hideSuspension');
            });
        },
        computed: {
            createSuspension() {
                return this.$store.state.suspension.show;
            }
        },
        methods: {
            newWindow() {
                if (this.createSuspension === true) {
                    this.$store.dispatch('hideSuspension');
                    this.$electron.ipcRenderer.send('hideSuspensionWindow');
                } else {
                    this.$store.dispatch('showSuspension');
                    this.$electron.ipcRenderer.send('showSuspensionWindow');
                }
            }
        }
    }
</script>