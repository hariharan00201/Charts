package com.example.profilingserver.model;

import java.util.List;

public class ResponseData {

    List<HeapSummaryData> heapSummaryDataList;
    List<CpuLoadData> cpuLoadDataList;

    public ResponseData(List<HeapSummaryData> heapSummaryDataList, List<CpuLoadData> cpuLoadDataList) {
        this.heapSummaryDataList = heapSummaryDataList;
        this.cpuLoadDataList = cpuLoadDataList;
    }

    @Override
    public String toString() {
        return "ResponseData{" +
                "heapSummaryDataList=" + heapSummaryDataList +
                ", cpuLoadDataList=" + cpuLoadDataList +
                '}';
    }
}
