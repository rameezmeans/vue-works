<template>
    <div @click="show = false" v-if="show">{{ inputValue }}</div>
    <input type="text" v-model='inputValue' @keyup.enter="show = true" v-if="!show" />
</template>
<script>
    export default {
        name: 'EditableInput',
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
                show: true
            }
        }
    };

</script>
