<template>
	<!-- 分页组件 -->
	<div class="kk-pagination">
		<el-pagination
			v-model:currentPage="currentPage"
			v-model:page-size="pageSize"
			:page-sizes="[10, 20, 30, 50, 100]"
			layout="total, sizes, prev, pager, next, jumper"
			:total="total"
			v-if="total"
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			v-bind="$attrs"
		/>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { pageQueryType } from "./types";
const props = defineProps({
	total: {
		type: Number,
		default: 0
	},
	// 父级传入的页面参数
	pageInfo: {
		type: Object as PropType<pageQueryType>,
		default: () => ({ currentPage: 1, pageSize: 10 })
	}
});

const emits = defineEmits<{
	(e: "handlePageDataChange", pageQuery: pageQueryType): void;
}>();

const currentPage = ref(props.pageInfo.currentPage);
const pageSize = ref(props.pageInfo.pageSize);

watch(props.pageInfo, () => {
	currentPage.value = props.pageInfo.currentPage;
	pageSize.value = props.pageInfo.pageSize;
});

const handleSizeChange = (val: number) => {
	currentPage.value = 1;
	emits("handlePageDataChange", {
		currentPage: 1,
		pageSize: pageSize.value
	});
};
const handleCurrentChange = (val: number) => {
	emits("handlePageDataChange", {
		currentPage: currentPage.value,
		pageSize: pageSize.value
	});
};
</script>

<style lang="scss" scoped>
// .kk-pagination {
// 	position: absolute;
// 	left: 50%;
// 	transform: translateX(-50%);
// 	bottom: 10px;
// 	// display: flex;
// 	// align-items: center;
// 	// justify-content: center;
// 	// margin: 20px 0;
// }

.kk-pagination {
	position: relative;
	display: flex;
	justify-content: center;
	margin-top: 15px;
}
</style>
