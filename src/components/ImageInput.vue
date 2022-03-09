<template>
    <img :src="url" width="100" />
    <div class="change" @mouseenter="show = true">Change</div>
    <input type="file" ref="imageInput" @input="pickImage" @change="showFilePreview" v-if="show">
</template>
<script>
    import axios from 'axios'

    export default {
        name: 'ImageInput',
        props: ['input', 'modelValue'],
        computed: {
            inputValue: {
                get() {
                    return this.modelValue
                },
                set(value) {
                    this.$emit('update:modelValue', value)
                }
            }
        },
        data() {
            return {
                show: false,
                url: "/person.png"
            }
        },
        methods: {
            showFilePreview(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;
                this.createImage(files[0]);
                this.uploadImage(files[0]);
            },
            createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = (e) => {
                    vm.url = e.target.result;
                };
                reader.readAsDataURL(file);
                this.uploadImage(file);
            },
            uploadImage(file) {
                const URL = 'https://test-api.mybimiboo.dev/api/items';

                let data = new FormData();
                data.append('name', 'my-picture');
                data.append('file', file);

                let config = {
                    header: {
                        'Content-Type': 'image/png'
                    }
                }

                axios.post(
                    URL,
                    data,
                    config
                ).then(
                    response => {
                        console.log('image upload response > ', response)
                    }
                );

            }
        }
    };

</script>

<style scoped>


</style>
