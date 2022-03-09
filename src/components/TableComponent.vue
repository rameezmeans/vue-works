<template>
    <div class="all-tickets"> <span class="table-top">All Tickets</span>
        <table class="table">
            <tr>
                <th width='5%'>ID</th>
                <th width='10%'>Name</th>
                <th width='35%'>Description</th>
                <th width='10%'>Priority</th>
                <th width='20%'>Image</th>
            </tr>
            <Ticket v-for="(ticket, i) in tickets" :key="i" :id="ticket.id" :name="ticket.name" :description="ticket.description" :priority="ticket.priority" />
        </table>
    </div>
</template>

<script>
    import Ticket from '@/components/TicketComponent.vue'
    import store from '@/store'
    import {
        provide
    } from 'vue'

    export default {
        setup() {
            provide('store', store)
        },
        name: 'TableComponent',
        components: {
            Ticket
        },
        data() {
            return {
                tickets: store.state.tickets
            }
        }
    }

</script>


<style scoped>
    .all-tickets {
        position: absolute;
        height: 942px;
        left: 268px;
        right: 17px;
        top: 102px;
    }

    .table-top {
        position: absolute;
        height: 24px;
        left: 20px;
        right: 850px;
        top: 32px;
        /* Bold 19 (0.4 px) */
        font-style: normal;
        font-weight: bold;
        font-size: 19px;
        line-height: 24px;
        /* identical to box height */
        letter-spacing: 0.4px;
        /* grayscale / black */
        color: #252733;
    }

    .table {
        position: absolute;
        width: 700px;
        left: 22px;
        right: 10px;
        top: 104px;
    }

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
