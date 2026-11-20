
// mockData/policyData.ts (เพิ่มต่อท้าย)
export type Policy = (typeof policyData.policyData)[number];

export function findPolicy(policyNumber?: string): Policy | undefined {
    return policyData.policyData.find((p) => p.policyNumber === policyNumber);
}

export const policyData = {
    policyData: [
        {
            policyNumber: "V-2559-001103388",
            licensePlate: "7กง 2938 กรุงเทพมหานคร",
            insuranceType: "1",
            policyStatus: "คุ้มครอง"
        },
        {
            policyNumber: "V-2323-000292922",
            licensePlate: "8กง 2392 กรุงไทย",
            insuranceType: "1",
            policyStatus: "คุ้มครอง"
        },
        {
            policyNumber: "V-1111-000292922",
            licensePlate: "8กง 1111 กรุงไทย",
            insuranceType: "1",
            policyStatus: "คุ้มครอง"
        }
    ],

}