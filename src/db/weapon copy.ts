import { WeaponLocal } from "../app/models";
import { WeaponType, EquipmentTree } from "../app/shared/enums";

let list: Map<WeaponType, (WeaponLocal | undefined)[]> = new Map([
    [
        WeaponType.longsword, 
                [
                    // Mineral
                    {
                        id: 1,
                        name: EquipmentTree.mineral,
                        base: true,
                        rarity: 1,
                        materials: undefined,
                        previous: undefined,
                        upgrade: [2, 11, 17, 27, 37, 39]
                    },
                    {
                        id: 2,
                        name: EquipmentTree.mineral,
                        rarity: 2,
                        materials: [
                            { material: 1, amount: 1 },
                            { material: 2, amount: 1 },
                            { material: 16, amount: 1 }
                        ],
                        previous: 1,
                        upgrade: [3]
                    },
                    {
                        id: 3,
                        name: EquipmentTree.mineral,
                        rarity: 3,
                        materials: [
                            { material: 2, amount: 3 },
                            { material: 3, amount: 2 },
                            { material: 4, amount: 2 },
                            { material: 7, amount: 2 }
                        ],
                        previous: 3,
                        upgrade: undefined
                    },
                    // Bone
                    {
                        id: 4,
                        name: EquipmentTree.bone,
                        rarity: 1,
                        materials: [
                            { material: 15, amount: 1 }
                        ],
                        previous: undefined,
                        upgrade: [5, 13, 21, 23]
                    },
                    {
                        id: 5,
                        name: EquipmentTree.bone,
                        rarity: 2,
                        materials: [
                            { material: 13, amount: 1 },
                            { material: 16, amount: 1 },
                            { material: 17, amount: 1 }
                        ],
                        previous: 4,
                        upgrade: [6]
                    },
                    {
                        id: 6,
                        name: EquipmentTree.bone,
                        rarity: 3,
                        materials: [
                            { material: 11, amount: 3 },
                            { material: 18, amount: 2 },
                            { material: 19, amount: 2 }
                        ],
                        previous: 5,
                        upgrade: undefined
                    },
                    // Great Jagras
                    undefined, undefined,
                    // Barroth
                    undefined, undefined,
                    // Kulu-Ya-Ku
                    {
                        id: 11,
                        name: EquipmentTree.kuluYaKu,
                        rarity: 3,
                        materials: [
                            { material: 5, amount: 3 },
                            { material: 46, amount: 4 },
                            { material: 47, amount: 2 },
                            { material: 49, amount: 1 }
                        ],
                        previous: 1,
                        upgrade: [12]
                    },
                    {
                        id: 12,
                        name: EquipmentTree.kuluYaKu,
                        rarity: 4,
                        materials: [
                            { material: 13, amount: 4 },
                            { material: 47, amount: 3 },
                            { material: 48, amount: 3 },
                            { material: 49, amount: 2 }
                        ],
                        previous: 11,
                        upgrade: undefined
                    },
                    // Tobi-Kadachi
                    {
                        id: 13,
                        name: EquipmentTree.tobiKadachi,
                        rarity: 3,
                        materials: [
                            { material: 66, amount: 2 },
                            { material: 67, amount: 3 },
                            { material: 69, amount: 1 }
                        ],
                        previous: 4,
                        upgrade: [14]
                    },
                    {
                        id: 14,
                        name: EquipmentTree.tobiKadachi,
                        rarity: 4,
                        materials: [
                            { material: 7, amount: 2 },
                            { material: 66, amount: 1 },
                            { material: 67, amount: 1 },
                            { material: 69, amount: 3 }
                        ],
                        previous: 13,
                        upgrade: undefined
                    },
                    // Pukei-Pukei
                    undefined, undefined,
                    // Tzitzi-Ya-Ku
                    {
                        id: 17,
                        name: EquipmentTree.tzitziYaKu,
                        rarity: 3,
                        materials: [
                            { material: 76, amount: 3 },
                            { material: 78, amount: 2 },
                            { material: 79, amount: 1 }
                        ],
                        previous: 1,
                        upgrade: [18]
                    },
                    {
                        id: 18,
                        name: EquipmentTree.tzitziYaKu,
                        rarity: 4,
                        materials: [
                            { material: 8, amount: 1 },
                            { material: 76, amount: 5 },
                            { material: 78, amount: 2 },
                            { material: 79, amount: 1 }
                        ],
                        previous: 17,
                        upgrade: undefined
                    },
                    // Great Girros
                    undefined, undefined,
                    // Anjanath
                    {
                        id: 21,
                        name: EquipmentTree.anjanath,
                        rarity: 3,
                        materials: [
                            { material: 28, amount: 1 },
                            { material: 71, amount: 3 },
                            { material: 73, amount: 2 }
                        ],
                        previous: 4,
                        upgrade: [22]
                    },
                    {
                        id: 22,
                        name: EquipmentTree.anjanath,
                        rarity: 4,
                        materials: [
                            { material: 29, amount: 2 },
                            { material: 72, amount: 2 },
                            { material: 73, amount: 2 }
                        ],
                        previous: 21,
                        upgrade: undefined
                    },
                    // Jyuratodus
                    {
                        id: 23,
                        name: EquipmentTree.jyuratodus,
                        rarity: 3,
                        materials: [
                            { material: 30, amount: 1 },
                            { material: 61, amount: 3 },
                            { material: 62, amount: 2 },
                            { material: 65, amount: 1 }
                        ],
                        previous: 4,
                        upgrade: [24]
                    },
                    {
                        id: 24,
                        name: EquipmentTree.jyuratodus,
                        rarity: 4,
                        materials: [
                            { material: 30, amount: 1 },
                            { material: 38, amount: 1 },
                            { material: 61, amount: 2 },
                            { material: 63, amount: 2 },
                            { material: 65, amount: 1 }
                        ],
                        previous: 23,
                        upgrade: undefined
                    },
                    // Radobaan
                    undefined, undefined,
                    // Rathalos
                    {
                        id: 27,
                        name: EquipmentTree.rathalos,
                        rarity: 3,
                        materials: [
                            { material: 29, amount: 1 },
                            { material: 88, amount: 2 },
                            { material: 91, amount: 2 },
                            { material: 95, amount: 1 }
                        ],
                        previous: 1,
                        upgrade: [28]
                    },
                    {
                        id: 28,
                        name: EquipmentTree.rathalos,
                        rarity: 4,
                        materials: [
                            { material: 88, amount: 2 },
                            { material: 90, amount: 1 },
                            { material: 92, amount: 1 },
                            { material: 96, amount: 1 }
                        ],
                        previous: 27,
                        upgrade: undefined
                    },
                    // Azure Rathalos
                    undefined, undefined,
                    // Diablos
                    undefined, undefined,
                    // Black Diablos
                    undefined, undefined,
                    // Kushala Daora
                    undefined, undefined,
                    // Teostra
                    {
                        id: 37,
                        name: EquipmentTree.teostra,
                        rarity: 4,
                        materials: [
                            
                            { material: 127, amount: 2 },
                            { material: 128, amount: 1 },
                            { material: 132, amount: 1 },
                            { material: 134, amount: 1 }
                        ],
                        previous: 1,
                        upgrade: [36]
                    },
                    {
                        id: 38,
                        name: EquipmentTree.teostra,
                        rarity: 5,
                        materials: [
                            { material: 130, amount: 3 },
                            { material: 132, amount: 2 },
                            { material: 135, amount: 1 }
                        ],
                        previous: 35,
                        upgrade: undefined
                    },
                    // Nergigante
                    {
                        id: 39,
                        name: EquipmentTree.nergigante,
                        rarity: 4,
                        materials: [
                            
                            { material: 121, amount: 2 },
                            { material: 122, amount: 2 },
                            { material: 124, amount: 1 },
                            { material: 125, amount: 1 }
                        ],
                        previous: 1,
                        upgrade: [40]
                    },
                    {
                        id: 40,
                        name: EquipmentTree.nergigante,
                        rarity: 5,
                        materials: [
                            { material: 123, amount: 4 },
                            { material: 124, amount: 3 },
                            { material: 126, amount: 2 }
                        ],
                        previous: 39,
                        upgrade: undefined
                    },
                    // Kirin
                    {}, {}
                ]
    ]
]);