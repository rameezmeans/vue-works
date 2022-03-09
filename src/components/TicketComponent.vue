<template>
    <tr>
        <td>{{id}}</td>
        <td>
            <EditableInput v-model="nameValue" />
        </td>
        <td>
            <EditableInput v-model="descriptionValue" />
        </td>
        <td>
            <EditableInput v-model="priorityValue" />
        </td>
        <td>
            <ImageInput />
        </td>
    </tr>
</template>
<script>
    import EditableInput from '@/components/InputComponent.vue'
    import ImageInput from '@/components/ImageInput.vue'

    export default {
        name: 'TicketComponent',
        props: ['id', 'name', 'description', 'priority'],
        components: {
            EditableInput,
            ImageInput
        },
        data() {
            return {
                nameValue: this.name,
                descriptionValue: this.description,
                priorityValue: this.priority
            }
        }
    };

</script>

<style scoped>
    th,
    td {
        padding: 5px;
    }

    th {
        text-align: left;
    }

    td {
        text-align: left;
    }

    .bg {
        padding: 5px;
    }

    .btn {
        position: absolute;
        width: 100px;
        left: 22px;
        right: 10px;
        top: 64px;
    }

    .bg-danger {
        background-color: #f2dede;
    }

    .bg-success {
        background-color: #dff0d8;
    }

</style>
