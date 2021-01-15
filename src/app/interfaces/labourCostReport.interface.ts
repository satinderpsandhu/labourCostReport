export interface LabourCostReport {
    providers: ProviderI[];
    directContractors: ProviderI[];
    total: ProviderI[];
    [key: string]: any;
}

export interface ProviderI {
    rebatesTotal: number;
    grossPayTotal: number;
    workerCount: number;
    complianceStats?: ComplianceStats | null;
    payrollAdminTotal: number;
    labourCostTotal: number;
    providerId: number;
    name: string;
}

export interface ComplianceStats {
    OpsEmpStatusChecked: number;
    Total: number;
    TaxStatus: number;
    Identification: number;
    RightToWork: number;
    OpsChecked: number;
    Contract: number;
    EmpStatusReview: number
  }