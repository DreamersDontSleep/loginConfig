<template>
  <el-table
    v-bind="$attrs"
    empty-text="没有匹配的数据"
    highlight-current-row
    stripe
    border
    v-on="$listeners">

    <template v-for="(column, index) in columns" >

      <el-table-column v-if="column.slot" :key="index" v-bind="column.attrs || {}" align="center">
        <template slot-scope="scope">
          <slot :name="column.slot" :scope="scope"/>
        </template>
      </el-table-column>

      <el-table-column v-else-if="column.operations" :key="index" v-bind="column.attrs || {}" align="center">
        <template slot-scope="scope">
          <el-button
            v-for="(operate, index) in column.operations"
            :key="index"
            :type="operate.type"
            :icon="operate.icon"
            plain
            @click.native="handleOperate(operate.event, scope.row)">{{ operate.name }}</el-button>
        </template>
      </el-table-column>

      <el-table-column v-else :key="index" v-bind="column.attrs || {}" align="center" />
    </template>
  </el-table>
</template>

<script>
export default {
  name: 'CommonTable',
  inheritAttrs: false,
  props: {
    columns: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleOperate(event, rowData) {
      this.$emit(event, rowData)
    }
  }
}
</script>

