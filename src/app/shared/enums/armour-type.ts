export const ArmourType = {
    helm: "helm",
    chest: "chest",
    leg: "leg"
} as const;

export type ArmourType = typeof ArmourType[keyof typeof ArmourType];