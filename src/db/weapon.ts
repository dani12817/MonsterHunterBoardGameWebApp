import { WeaponLocal } from "../app/models";
import { WeaponType, EquipmentTree } from "../app/shared/enums";

export const WEAPON_TABLE: Map<WeaponType, (WeaponLocal | undefined)[]> = new Map([
    [
        WeaponType.greatsword,
        [
            // Mineral
            {
                id: 1,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [2, 15, 19, 27, 35, 39]
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
                upgrade: [5, 7, 9, 41]
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
            {
                id: 7,
                name: EquipmentTree.greatJagras,
                rarity: 3,
                materials: [
                    { material: 21, amount: 1 },
                    { material: 42, amount: 2 },
                    { material: 43, amount: 1 },
                    { material: 44, amount: 2 }
                ],
                previous: 4,
                upgrade: [8]
            },
            {
                id: 8,
                name: EquipmentTree.greatJagras,
                rarity: 4,
                materials: [
                    { material: 22, amount: 1 },
                    { material: 42, amount: 2 },
                    { material: 44, amount: 2 },
                    { material: 45, amount: 2 }
                ],
                previous: 7,
                upgrade: undefined
            },
            // Barroth
            {
                id: 9,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 56, amount: 3 },
                    { material: 58, amount: 3 },
                    { material: 59, amount: 1 }
                ],
                previous: 4,
                upgrade: [10]
            },
            {
                id: 10,
                name: EquipmentTree.barroth,
                rarity: 4,
                materials: [
                    { material: 57, amount: 3 },
                    { material: 58, amount: 3 },
                    { material: 59, amount: 2 }
                ],
                previous: 9,
                upgrade: undefined
            },
            // Kulu-Ya-Ku
            undefined, undefined,
            // Tobi-Kadachi
            undefined, undefined,
            // Pukei-Pukei
            {
                id: 15,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 23, amount: 1 },
                    { material: 50, amount: 2 },
                    { material: 52, amount: 2 },
                    { material: 55, amount: 1 }
                ],
                previous: 1,
                upgrade: [16]
            },
            {
                id: 16,
                name: EquipmentTree.pukeiPukei,
                rarity: 4,
                materials: [
                    { material: 11, amount: 3 },
                    { material: 24, amount: 2 },
                    { material: 50, amount: 2 },
                    { material: 52, amount: 2 }
                ],
                previous: 15,
                upgrade: undefined
            },
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            {
                id: 19,
                name: EquipmentTree.greatGirros,
                rarity: 3,
                materials: [
                    { material: 41, amount: 2 },
                    { material: 80, amount: 4 },
                    { material: 82, amount: 3 }
                ],
                previous: 1,
                upgrade: [20]
            },
            {
                id: 20,
                name: EquipmentTree.greatGirros,
                rarity: 4,
                materials: [
                    { material: 40, amount: 1 },
                    { material: 80, amount: 2 },
                    { material: 82, amount: 2 },
                    { material: 83, amount: 2 }
                ],
                previous: 19,
                upgrade: undefined
            },
            // Anjanath
            undefined, undefined,
            // Jyuratodus
            undefined, undefined,
            // Radobaan
            {
                id: 25,
                name: EquipmentTree.radobaan,
                rarity: 3,
                materials: [
                    { material: 26, amount: 2 },
                    { material: 84, amount: 3 },
                    { material: 87, amount: 2 }
                ],
                previous: 1,
                upgrade: [26]
            },
            {
                id: 26,
                name: EquipmentTree.radobaan,
                rarity: 4,
                materials: [
                    { material: 18, amount: 2 },
                    { material: 27, amount: 1 },
                    { material: 85, amount: 4 },
                    { material: 86, amount: 2 }
                ],
                previous: 25,
                upgrade: undefined
            },
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
            // Rathalos Azure
            undefined, undefined,
            // Diablos
            undefined, undefined,
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 121, amount: 1 },
                    { material: 138, amount: 2 },
                    { material: 140, amount: 2 },
                    { material: 141, amount: 1 }
                ],
                previous: 1,
                upgrade: [36]
            },
            {
                id: 36,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 139, amount: 4 },
                    { material: 141, amount: 3 },
                    { material: 142, amount: 1 }
                ],
                previous: 35,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
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
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 8, amount: 1 },
                    { material: 115, amount: 3 },
                    { material: 116, amount: 1 },
                    { material: 118, amount: 3 }
                ],
                previous: 4,
                upgrade: [42]
            },
            {
                id: 42,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 7, amount: 2 },
                    { material: 115, amount: 2 },
                    { material: 117, amount: 2 },
                    { material: 119, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
    [
        WeaponType.swordShield, 
        [
            // Mineral
            {
                id: 1,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [2, 15, 19, 27, 37, 39]
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
                upgrade: [5, 7, 9, 41]
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
            {
                id: 7,
                name: EquipmentTree.greatJagras,
                rarity: 3,
                materials: [
                    { material: 21, amount: 1 },
                    { material: 42, amount: 2 },
                    { material: 43, amount: 1 },
                    { material: 44, amount: 2 }
                ],
                previous: 4,
                upgrade: [8]
            },
            {
                id: 8,
                name: EquipmentTree.greatJagras,
                rarity: 4,
                materials: [
                    { material: 22, amount: 1 },
                    { material: 42, amount: 3 },
                    { material: 44, amount: 1 },
                    { material: 45, amount: 2 }
                ],
                previous: 7,
                upgrade: undefined
            },
            // Barroth
            {
                id: 9,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 56, amount: 3 },
                    { material: 58, amount: 3 },
                    { material: 59, amount: 1 }
                ],
                previous: 4,
                upgrade: [10]
            },
            {
                id: 10,
                name: EquipmentTree.barroth,
                rarity: 4,
                materials: [
                    { material: 57, amount: 3 },
                    { material: 58, amount: 3 },
                    { material: 59, amount: 1 }
                ],
                previous: 9,
                upgrade: undefined
            },
            // Kulu-Ya-Ku
            undefined, undefined,
            // Tobi-Kadachi
            undefined, undefined,
            // Pukei-Pukei
            {
                id: 15,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 23, amount: 1 },
                    { material: 50, amount: 2 },
                    { material: 52, amount: 2 },
                    { material: 55, amount: 1 }
                ],
                previous: 1,
                upgrade: [16]
            },
            {
                id: 16,
                name: EquipmentTree.pukeiPukei,
                rarity: 4,
                materials: [
                    { material: 11, amount: 3 },
                    { material: 24, amount: 2 },
                    { material: 50, amount: 2 },
                    { material: 52, amount: 2 }
                ],
                previous: 15,
                upgrade: undefined
            },
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            {
                id: 19,
                name: EquipmentTree.greatGirros,
                rarity: 3,
                materials: [
                    { material: 41, amount: 2 },
                    { material: 80, amount: 4 },
                    { material: 82, amount: 3 }
                ],
                previous: 1,
                upgrade: [20]
            },
            {
                id: 20,
                name: EquipmentTree.greatGirros,
                rarity: 4,
                materials: [
                    { material: 40, amount: 1 },
                    { material: 80, amount: 2 },
                    { material: 82, amount: 2 },
                    { material: 83, amount: 2 }
                ],
                previous: 19,
                upgrade: undefined
            },
            // Anjanath
            undefined, undefined,
            // Jyuratodus
            undefined, undefined,
            // Radobaan
            {
                id: 25,
                name: EquipmentTree.radobaan,
                rarity: 3,
                materials: [
                    { material: 26, amount: 2 },
                    { material: 84, amount: 3 },
                    { material: 87, amount: 2 }
                ],
                previous: 1,
                upgrade: [26]
            },
            {
                id: 26,
                name: EquipmentTree.radobaan,
                rarity: 4,
                materials: [
                    { material: 18, amount: 2 },
                    { material: 27, amount: 1 },
                    { material: 85, amount: 4 },
                    { material: 86, amount: 2 }
                ],
                previous: 25,
                upgrade: undefined
            },
            // Rathalos
            {
                id: 27,
                name: EquipmentTree.rathalos,
                rarity: 3,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 88, amount: 1 },
                    { material: 93, amount: 2 },
                    { material: 97, amount: 1 }
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
                    { material: 90, amount: 2 },
                    { material: 92, amount: 1 }
                ],
                previous: 27,
                upgrade: undefined
            },
            // Rathalos Azure
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
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 8, amount: 1 },
                    { material: 115, amount: 3 },
                    { material: 116, amount: 1 },
                    { material: 118, amount: 3 }
                ],
                previous: 4,
                upgrade: [42]
            },
            {
                id: 42,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 7, amount: 2 },
                    { material: 115, amount: 2 },
                    { material: 117, amount: 2 },
                    { material: 119, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
    [
        WeaponType.dualBlades, 
        [
            // Mineral
            {
                id: 1,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [2, 11, 17, 35, 37, 39]
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
                upgrade: [5, 13, 21, 23, 31, 41]
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
                    { material: 6, amount: 2 },
                    { material: 32, amount: 2 },
                    { material: 69, amount: 2 },
                    { material: 70, amount: 1 }
                ],
                previous: 4,
                upgrade: [14]
            },
            {
                id: 14,
                name: EquipmentTree.tobiKadachi,
                rarity: 4,
                materials: [
                    { material: 33, amount: 1 },
                    { material: 69, amount: 2 },
                    { material: 70, amount: 2 }
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
                    { material: 10, amount: 2 },
                    { material: 72, amount: 4 },
                    { material: 73, amount: 4 }
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
            undefined, undefined,
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            {
                id: 31,
                name: EquipmentTree.diablos,
                rarity: 3,
                materials: [
                    { material: 17, amount: 2 },
                    { material: 105, amount: 4 },
                    { material: 108, amount: 2 },
                    { material: 109, amount: 1 }
                ],
                previous: 4,
                upgrade: [32]
            },
            {
                id: 32,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 106, amount: 2 },
                    { material: 107, amount: 2 },
                    { material: 110, amount: 2 },
                    { material: 111, amount: 1 }
                ],
                previous: 31,
                upgrade: undefined
            },
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 121, amount: 1 },
                    { material: 138, amount: 2 },
                    { material: 140, amount: 2 },
                    { material: 141, amount: 1 }
                ],
                previous: 1,
                upgrade: [36]
            },
            {
                id: 36,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 139, amount: 4 },
                    { material: 141, amount: 3 },
                    { material: 142, amount: 1 }
                ],
                previous: 35,
                upgrade: undefined
            },
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
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 8, amount: 1 },
                    { material: 115, amount: 3 },
                    { material: 116, amount: 1 },
                    { material: 118, amount: 3 }
                ],
                previous: 4,
                upgrade: [42]
            },
            {
                id: 42,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 7, amount: 2 },
                    { material: 115, amount: 2 },
                    { material: 117, amount: 2 },
                    { material: 119, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
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
            undefined, undefined
        ]
    ],
    [
        WeaponType.hammer, 
        [
            // Mineral
            {
                id: 1,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [2, 15, 19, 35, 39]
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
                upgrade: [5, 9, 11, 21, 25, 31]
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
            {
                id: 9,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 56, amount: 4 },
                    { material: 58, amount: 2 },
                    { material: 59, amount: 1 }
                ],
                previous: 4,
                upgrade: [10]
            },
            {
                id: 10,
                name: EquipmentTree.barroth,
                rarity: 4,
                materials: [
                    { material: 57, amount: 3 },
                    { material: 58, amount: 2 },
                    { material: 59, amount: 2 }
                ],
                previous: 9,
                upgrade: undefined
            },
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
            undefined, undefined,
            // Pukei-Pukei
            {
                id: 15,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 23, amount: 1 },
                    { material: 50, amount: 3 },
                    { material: 52, amount: 2 }
                ],
                previous: 1,
                upgrade: [16]
            },
            {
                id: 16,
                name: EquipmentTree.pukeiPukei,
                rarity: 4,
                materials: [
                    { material: 11, amount: 3 },
                    { material: 24, amount: 2 },
                    { material: 50, amount: 3 },
                    { material: 52, amount: 2 }
                ],
                previous: 15,
                upgrade: undefined
            },
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            {
                id: 19,
                name: EquipmentTree.greatGirros,
                rarity: 3,
                materials: [
                    { material: 41, amount: 2 },
                    { material: 80, amount: 4 },
                    { material: 82, amount: 3 }
                ],
                previous: 1,
                upgrade: [20]
            },
            {
                id: 20,
                name: EquipmentTree.greatGirros,
                rarity: 4,
                materials: [
                    { material: 40, amount: 1 },
                    { material: 80, amount: 2 },
                    { material: 82, amount: 2 },
                    { material: 83, amount: 2 }
                ],
                previous: 19,
                upgrade: undefined
            },
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
                    { material: 29, amount: 1 },
                    { material: 71, amount: 2 },
                    { material: 73, amount: 4 }
                ],
                previous: 21,
                upgrade: undefined
            },
            // Jyuratodus
            undefined, undefined,
            // Radobaan
            {
                id: 25,
                name: EquipmentTree.radobaan,
                rarity: 3,
                materials: [
                    { material: 26, amount: 2 },
                    { material: 84, amount: 3 },
                    { material: 87, amount: 2 }
                ],
                previous: 1,
                upgrade: [26]
            },
            {
                id: 26,
                name: EquipmentTree.radobaan,
                rarity: 4,
                materials: [
                    { material: 18, amount: 2 },
                    { material: 27, amount: 1 },
                    { material: 85, amount: 4 },
                    { material: 86, amount: 2 }
                ],
                previous: 25,
                upgrade: undefined
            },
            // Rathalos
            undefined, undefined,
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            {
                id: 31,
                name: EquipmentTree.diablos,
                rarity: 3,
                materials: [
                    { material: 17, amount: 3 },
                    { material: 105, amount: 4 },
                    { material: 108, amount: 2 },
                    { material: 109, amount: 1 }
                ],
                previous: 4,
                upgrade: [32]
            },
            {
                id: 32,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 106, amount: 2 },
                    { material: 107, amount: 2 },
                    { material: 110, amount: 2 },
                    { material: 111, amount: 1 }
                ],
                previous: 31,
                upgrade: undefined
            },
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 121, amount: 1 },
                    { material: 138, amount: 2 },
                    { material: 140, amount: 2 },
                    { material: 141, amount: 1 }
                ],
                previous: 1,
                upgrade: [36]
            },
            {
                id: 36,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 139, amount: 4 },
                    { material: 141, amount: 3 },
                    { material: 142, amount: 1 }
                ],
                previous: 35,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
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
            undefined, undefined
        ]
    ],
    [
        WeaponType.huntingHorn, 
        [
            // Mineral
            {
                id: 1,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [2, 11, 37, 39]
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
                upgrade: [5, 13, 15, 21, 23, 25, 41]
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
                    { material: 2, amount: 2 },
                    { material: 6, amount: 2 },
                    { material: 32, amount: 2 },
                    { material: 69, amount: 2 },
                    { material: 70, amount: 1 }
                ],
                previous: 4,
                upgrade: [14]
            },
            {
                id: 14,
                name: EquipmentTree.tobiKadachi,
                rarity: 4,
                materials: [
                    { material: 4, amount: 2 },
                    { material: 33, amount: 1 },
                    { material: 69, amount: 2 },
                    { material: 70, amount: 2 }
                ],
                previous: 13,
                upgrade: undefined
            },
            // Pukei-Pukei
            {
                id: 15,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 23, amount: 1 },
                    { material: 50, amount: 2 },
                    { material: 52, amount: 2 },
                    { material: 55, amount: 1 }
                ],
                previous: 1,
                upgrade: [16]
            },
            {
                id: 16,
                name: EquipmentTree.pukeiPukei,
                rarity: 4,
                materials: [
                    { material: 11, amount: 3 },
                    { material: 24, amount: 2 },
                    { material: 50, amount: 2 },
                    { material: 52, amount: 2 }
                ],
                previous: 15,
                upgrade: undefined
            },
            // Tzitzi-Ya-Ku
            undefined, undefined,
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
                    { material: 10, amount: 2 },
                    { material: 72, amount: 4 },
                    { material: 73, amount: 4 }
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
            {
                id: 25,
                name: EquipmentTree.radobaan,
                rarity: 3,
                materials: [
                    { material: 26, amount: 2 },
                    { material: 84, amount: 3 },
                    { material: 87, amount: 2 }
                ],
                previous: 1,
                upgrade: [26]
            },
            {
                id: 26,
                name: EquipmentTree.radobaan,
                rarity: 4,
                materials: [
                    { material: 18, amount: 2 },
                    { material: 27, amount: 1 },
                    { material: 85, amount: 4 },
                    { material: 86, amount: 2 }
                ],
                previous: 25,
                upgrade: undefined
            },
            // Rathalos
            undefined, undefined,
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
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 8, amount: 1 },
                    { material: 115, amount: 3 },
                    { material: 116, amount: 1 },
                    { material: 118, amount: 3 }
                ],
                previous: 4,
                upgrade: [42]
            },
            {
                id: 42,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 7, amount: 2 },
                    { material: 115, amount: 2 },
                    { material: 117, amount: 2 },
                    { material: 119, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
    [
        WeaponType.lance, 
        [
            // Mineral
            {
                id: 1,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [2]
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
                upgrade: [3, 11, 27, 35, 39]
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
                upgrade: [5, 9, 13, 23, 41]
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
            {
                id: 9,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 56, amount: 3 },
                    { material: 58, amount: 3 },
                    { material: 59, amount: 1 }
                ],
                previous: 4,
                upgrade: [10]
            },
            {
                id: 10,
                name: EquipmentTree.barroth,
                rarity: 4,
                materials: [
                    { material: 57, amount: 3 },
                    { material: 58, amount: 3 },
                    { material: 59, amount: 2 }
                ],
                previous: 9,
                upgrade: undefined
            },
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
                    { material: 2, amount: 2 },
                    { material: 6, amount: 2 },
                    { material: 32, amount: 2 },
                    { material: 69, amount: 2 },
                    { material: 70, amount: 1 }
                ],
                previous: 4,
                upgrade: [14]
            },
            {
                id: 14,
                name: EquipmentTree.tobiKadachi,
                rarity: 4,
                materials: [
                    { material: 4, amount: 2 },
                    { material: 33, amount: 1 },
                    { material: 69, amount: 2 },
                    { material: 70, amount: 2 }
                ],
                previous: 13,
                upgrade: undefined
            },
            // Pukei-Pukei
            undefined, undefined,
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            undefined, undefined,
            // Anjanath
            undefined, undefined,
            // Jyuratodus
            {
                id: 23,
                name: EquipmentTree.jyuratodus,
                rarity: 3,
                materials: [
                    { material: 13, amount: 2 },
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
            undefined, undefined,
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            undefined, undefined,
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 121, amount: 1 },
                    { material: 138, amount: 2 },
                    { material: 140, amount: 2 },
                    { material: 141, amount: 1 }
                ],
                previous: 1,
                upgrade: [36]
            },
            {
                id: 36,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 139, amount: 4 },
                    { material: 141, amount: 3 },
                    { material: 142, amount: 1 }
                ],
                previous: 35,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
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
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 8, amount: 1 },
                    { material: 115, amount: 3 },
                    { material: 116, amount: 1 },
                    { material: 118, amount: 3 }
                ],
                previous: 4,
                upgrade: [42]
            },
            {
                id: 42,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 7, amount: 2 },
                    { material: 115, amount: 2 },
                    { material: 117, amount: 2 },
                    { material: 119, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
    [
        WeaponType.gunlance, 
        [
            // Mineral
            {
                id: 1,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [2, 23, 27, 35, 39]
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
                upgrade: [5, 7, 9, 19]
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
            {
                id: 7,
                name: EquipmentTree.greatJagras,
                rarity: 3,
                materials: [
                    { material: 21, amount: 1 },
                    { material: 42, amount: 3 },
                    { material: 43, amount: 1 },
                    { material: 44, amount: 1 }
                ],
                previous: 4,
                upgrade: [8]
            },
            {
                id: 8,
                name: EquipmentTree.greatJagras,
                rarity: 4,
                materials: [
                    { material: 22, amount: 1 },
                    { material: 42, amount: 2 },
                    { material: 44, amount: 2 },
                    { material: 45, amount: 2 }
                ],
                previous: 7,
                upgrade: undefined
            },
            // Barroth
            {
                id: 9,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 56, amount: 3 },
                    { material: 58, amount: 2 },
                    { material: 59, amount: 1 }
                ],
                previous: 4,
                upgrade: [10]
            },
            {
                id: 10,
                name: EquipmentTree.barroth,
                rarity: 4,
                materials: [
                    { material: 57, amount: 3 },
                    { material: 58, amount: 3 },
                    { material: 59, amount: 2 },
                    { material: 60, amount: 2 }
                ],
                previous: 9,
                upgrade: undefined
            },
            // Kulu-Ya-Ku
            undefined, undefined,
            // Tobi-Kadachi
            undefined, undefined,
            // Pukei-Pukei
            undefined, undefined,
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            {
                id: 19,
                name: EquipmentTree.greatGirros,
                rarity: 3,
                materials: [
                    { material: 41, amount: 2 },
                    { material: 80, amount: 4 },
                    { material: 82, amount: 3 }
                ],
                previous: 1,
                upgrade: [20]
            },
            {
                id: 20,
                name: EquipmentTree.greatGirros,
                rarity: 4,
                materials: [
                    { material: 40, amount: 1 },
                    { material: 80, amount: 2 },
                    { material: 82, amount: 2 },
                    { material: 83, amount: 2 }
                ],
                previous: 19,
                upgrade: undefined
            },
            // Anjanath
            undefined, undefined,
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
                    { material: 91, amount: 1 },
                    { material: 95, amount: 2 }
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
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 121, amount: 1 },
                    { material: 138, amount: 2 },
                    { material: 140, amount: 2 },
                    { material: 141, amount: 1 }
                ],
                previous: 1,
                upgrade: [36]
            },
            {
                id: 36,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 139, amount: 4 },
                    { material: 141, amount: 3 },
                    { material: 142, amount: 1 }
                ],
                previous: 35,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
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
            undefined, undefined
        ]
    ],
    [
        WeaponType.switchAxe, 
        [
            // Mineral
            {
                id: 1,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [2, 27, 37, 39]
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
                upgrade: [5, 9, 21, 31, 41]
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
            {
                id: 9,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 56, amount: 4 },
                    { material: 58, amount: 2 },
                    { material: 59, amount: 1 }
                ],
                previous: 4,
                upgrade: [10]
            },
            {
                id: 10,
                name: EquipmentTree.barroth,
                rarity: 4,
                materials: [
                    { material: 57, amount: 3 },
                    { material: 58, amount: 3 },
                    { material: 59, amount: 2 },
                    { material: 60, amount: 2 }
                ],
                previous: 9,
                upgrade: undefined
            },
            // Kulu-Ya-Ku
            undefined, undefined,
            // Tobi-Kadachi
            undefined, undefined,
            // Pukei-Pukei
            undefined, undefined,
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            undefined, undefined,
            // Anjanath
            {
                id: 21,
                name: EquipmentTree.anjanath,
                rarity: 3,
                materials: [
                    { material: 28, amount: 1 },
                    { material: 71, amount: 1 },
                    { material: 72, amount: 2 },
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
                    { material: 10, amount: 2 },
                    { material: 72, amount: 4 },
                    { material: 74, amount: 4 }
                ],
                previous: 21,
                upgrade: undefined
            },
            // Jyuratodus
            undefined, undefined,
            // Radobaan
            undefined, undefined,
            // Rathalos
            {
                id: 27,
                name: EquipmentTree.rathalos,
                rarity: 3,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 88, amount: 1 },
                    { material: 91, amount: 2 },
                    { material: 95, amount: 2 }
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
            {
                id: 31,
                name: EquipmentTree.diablos,
                rarity: 3,
                materials: [
                    { material: 17, amount: 2 },
                    { material: 105, amount: 4 },
                    { material: 108, amount: 2 },
                    { material: 109, amount: 1 }
                ],
                previous: 4,
                upgrade: [32]
            },
            {
                id: 32,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 106, amount: 2 },
                    { material: 107, amount: 2 },
                    { material: 110, amount: 2 },
                    { material: 111, amount: 1 }
                ],
                previous: 31,
                upgrade: undefined
            },
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
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 8, amount: 1 },
                    { material: 115, amount: 3 },
                    { material: 116, amount: 1 },
                    { material: 118, amount: 3 }
                ],
                previous: 4,
                upgrade: [42]
            },
            {
                id: 42,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 7, amount: 2 },
                    { material: 115, amount: 2 },
                    { material: 117, amount: 2 },
                    { material: 119, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
    [
        WeaponType.chargeBlade, 
        [
            // Mineral
            {
                id: 1,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [2]
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
                upgrade: [3, 23, 35, 39]
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
                upgrade: [5, 7, 13, 19, 31]
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
            {
                id: 7,
                name: EquipmentTree.greatJagras,
                rarity: 3,
                materials: [
                    { material: 21, amount: 1 },
                    { material: 42, amount: 3 },
                    { material: 43, amount: 1 },
                    { material: 44, amount: 1 }
                ],
                previous: 4,
                upgrade: [8]
            },
            {
                id: 8,
                name: EquipmentTree.greatJagras,
                rarity: 4,
                materials: [
                    { material: 22, amount: 1 },
                    { material: 42, amount: 2 },
                    { material: 44, amount: 2 },
                    { material: 45, amount: 2 }
                ],
                previous: 7,
                upgrade: undefined
            },
            // Barroth
            undefined, undefined,
            // Kulu-Ya-Ku
            undefined, undefined,
            // Tobi-Kadachi
            {
                id: 13,
                name: EquipmentTree.tobiKadachi,
                rarity: 3,
                materials: [
                    { material: 66, amount: 3 },
                    { material: 67, amount: 2 },
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
                    { material: 66, amount: 2 },
                    { material: 67, amount: 2 },
                    { material: 69, amount: 2 }
                ],
                previous: 13,
                upgrade: undefined
            },
            // Pukei-Pukei
            undefined, undefined,
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            {
                id: 19,
                name: EquipmentTree.greatGirros,
                rarity: 3,
                materials: [
                    { material: 41, amount: 2 },
                    { material: 80, amount: 4 },
                    { material: 82, amount: 3 }
                ],
                previous: 1,
                upgrade: [20]
            },
            {
                id: 20,
                name: EquipmentTree.greatGirros,
                rarity: 4,
                materials: [
                    { material: 40, amount: 1 },
                    { material: 80, amount: 2 },
                    { material: 82, amount: 2 },
                    { material: 83, amount: 2 }
                ],
                previous: 19,
                upgrade: undefined
            },
            // Anjanath
            undefined, undefined,
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
            undefined, undefined,
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            {
                id: 31,
                name: EquipmentTree.diablos,
                rarity: 3,
                materials: [
                    { material: 17, amount: 2 },
                    { material: 105, amount: 4 },
                    { material: 108, amount: 2 },
                    { material: 109, amount: 1 }
                ],
                previous: 4,
                upgrade: [32]
            },
            {
                id: 32,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 106, amount: 2 },
                    { material: 107, amount: 2 },
                    { material: 110, amount: 2 },
                    { material: 111, amount: 1 }
                ],
                previous: 31,
                upgrade: undefined
            },
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 121, amount: 1 },
                    { material: 138, amount: 2 },
                    { material: 140, amount: 2 },
                    { material: 141, amount: 1 }
                ],
                previous: 1,
                upgrade: [36]
            },
            {
                id: 36,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 139, amount: 4 },
                    { material: 141, amount: 3 },
                    { material: 142, amount: 1 }
                ],
                previous: 35,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
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
            undefined, undefined
        ]
    ],
    [
        WeaponType.insectGlaive, 
        [
            // Mineral
            {
                id: 1,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [2, 11, 15, 17, 27, 35, 39]
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
                upgrade: [5, 21, 31, 41]
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
            undefined, undefined,
            // Pukei-Pukei
            {
                id: 15,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 23, amount: 1 },
                    { material: 50, amount: 2 },
                    { material: 52, amount: 2 },
                    { material: 55, amount: 1 }
                ],
                previous: 1,
                upgrade: [16]
            },
            {
                id: 16,
                name: EquipmentTree.pukeiPukei,
                rarity: 4,
                materials: [
                    { material: 11, amount: 3 },
                    { material: 24, amount: 2 },
                    { material: 50, amount: 2 },
                    { material: 52, amount: 2 }
                ],
                previous: 15,
                upgrade: undefined
            },
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
                    { material: 71, amount: 1 },
                    { material: 72, amount: 2 },
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
                    { material: 10, amount: 2 },
                    { material: 72, amount: 4 },
                    { material: 74, amount: 4 }
                ],
                previous: 21,
                upgrade: undefined
            },
            // Jyuratodus
            undefined, undefined,
            // Radobaan
            undefined, undefined,
            // Rathalos
            {
                id: 27,
                name: EquipmentTree.rathalos,
                rarity: 3,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 88, amount: 1 },
                    { material: 91, amount: 2 },
                    { material: 95, amount: 2 }
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
            {
                id: 31,
                name: EquipmentTree.diablos,
                rarity: 3,
                materials: [
                    { material: 17, amount: 3 },
                    { material: 105, amount: 4 },
                    { material: 108, amount: 2 },
                    { material: 109, amount: 1 }
                ],
                previous: 4,
                upgrade: [32]
            },
            {
                id: 32,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 106, amount: 2 },
                    { material: 107, amount: 2 },
                    { material: 110, amount: 2 },
                    { material: 111, amount: 1 }
                ],
                previous: 31,
                upgrade: undefined
            },
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 121, amount: 1 },
                    { material: 138, amount: 2 },
                    { material: 140, amount: 2 },
                    { material: 141, amount: 1 }
                ],
                previous: 1,
                upgrade: [36]
            },
            {
                id: 36,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 139, amount: 4 },
                    { material: 141, amount: 3 },
                    { material: 142, amount: 1 }
                ],
                previous: 35,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
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
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 8, amount: 1 },
                    { material: 115, amount: 3 },
                    { material: 116, amount: 1 },
                    { material: 118, amount: 3 }
                ],
                previous: 4,
                upgrade: [42]
            },
            {
                id: 42,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 7, amount: 2 },
                    { material: 115, amount: 2 },
                    { material: 117, amount: 2 },
                    { material: 119, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
    [
        WeaponType.bow, 
        [
            // Mineral
            {
                id: 1,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [2, 11, 27, 35, 39]
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
                upgrade: [5, 13, 15, 21, 31]
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
                    { material: 6, amount: 2 },
                    { material: 32, amount: 1 },
                    { material: 69, amount: 2 },
                    { material: 70, amount: 2 }
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
                    { material: 66, amount: 2 },
                    { material: 67, amount: 2 },
                    { material: 69, amount: 2 }
                ],
                previous: 13,
                upgrade: undefined
            },
            // Pukei-Pukei
            {
                id: 15,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 23, amount: 1 },
                    { material: 50, amount: 2 },
                    { material: 52, amount: 2 },
                    { material: 55, amount: 1 }
                ],
                previous: 1,
                upgrade: [16]
            },
            {
                id: 16,
                name: EquipmentTree.pukeiPukei,
                rarity: 4,
                materials: [
                    { material: 11, amount: 3 },
                    { material: 24, amount: 2 },
                    { material: 50, amount: 2 },
                    { material: 52, amount: 2 }
                ],
                previous: 15,
                upgrade: undefined
            },
            // Tzitzi-Ya-Ku
            undefined, undefined,
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
                    { material: 10, amount: 2 },
                    { material: 72, amount: 4 },
                    { material: 73, amount: 4 }
                ],
                previous: 21,
                upgrade: undefined
            },
            // Jyuratodus
            undefined, undefined,
            // Radobaan
            undefined, undefined,
            // Rathalos
            {
                id: 27,
                name: EquipmentTree.rathalos,
                rarity: 3,
                materials: [
                    { material: 29, amount: 1 },
                    { material: 88, amount: 1 },
                    { material: 91, amount: 2 },
                    { material: 95, amount: 2 }
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
            {
                id: 31,
                name: EquipmentTree.diablos,
                rarity: 3,
                materials: [
                    { material: 17, amount: 2 },
                    { material: 105, amount: 4 },
                    { material: 108, amount: 2 },
                    { material: 109, amount: 1 }
                ],
                previous: 4,
                upgrade: [32]
            },
            {
                id: 32,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 106, amount: 2 },
                    { material: 107, amount: 2 },
                    { material: 110, amount: 2 },
                    { material: 111, amount: 1 }
                ],
                previous: 31,
                upgrade: undefined
            },
            // Black Diablos
            undefined, undefined,
            // Kushala Daora
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 121, amount: 1 },
                    { material: 138, amount: 2 },
                    { material: 140, amount: 2 },
                    { material: 141, amount: 1 }
                ],
                previous: 1,
                upgrade: [36]
            },
            {
                id: 36,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 139, amount: 4 },
                    { material: 141, amount: 3 },
                    { material: 142, amount: 1 }
                ],
                previous: 35,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
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
            undefined, undefined
        ]
    ],
    [
        WeaponType.lightBowgun, 
        [
            // Mineral
            {
                id: 1,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [2, 7, 27, 35, 39]
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
                upgrade: [5, 9, 23, 41]
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
            {
                id: 7,
                name: EquipmentTree.greatJagras,
                rarity: 3,
                materials: [
                    { material: 21, amount: 1 },
                    { material: 42, amount: 3 },
                    { material: 43, amount: 1 },
                    { material: 44, amount: 1 }
                ],
                previous: 4,
                upgrade: [8]
            },
            {
                id: 8,
                name: EquipmentTree.greatJagras,
                rarity: 4,
                materials: [
                    { material: 22, amount: 1 },
                    { material: 42, amount: 2 },
                    { material: 44, amount: 2 },
                    { material: 45, amount: 2 }
                ],
                previous: 7,
                upgrade: undefined
            },
            // Barroth
            {
                id: 13,
                name: EquipmentTree.barroth,
                rarity: 3,
                materials: [
                    { material: 56, amount: 3 },
                    { material: 58, amount: 2 },
                    { material: 59, amount: 1 }
                ],
                previous: 4,
                upgrade: [14]
            },
            {
                id: 14,
                name: EquipmentTree.barroth,
                rarity: 4,
                materials: [
                    { material: 57, amount: 3 },
                    { material: 58, amount: 2 },
                    { material: 59, amount: 2 }
                ],
                previous: 13,
                upgrade: undefined
            },
            // Kulu-Ya-Ku
            undefined, undefined,
            // Tobi-Kadachi
            undefined, undefined,
            // Pukei-Pukei
            undefined, undefined,
            // Tzitzi-Ya-Ku
            undefined, undefined,
            // Great Girros
            undefined, undefined,
            // Anjanath
            undefined, undefined,
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
            {
                id: 35,
                name: EquipmentTree.kushalaDaora,
                rarity: 4,
                materials: [
                    
                    { material: 121, amount: 1 },
                    { material: 138, amount: 2 },
                    { material: 140, amount: 2 },
                    { material: 141, amount: 1 }
                ],
                previous: 1,
                upgrade: [36]
            },
            {
                id: 36,
                name: EquipmentTree.kushalaDaora,
                rarity: 5,
                materials: [
                    { material: 139, amount: 4 },
                    { material: 141, amount: 3 },
                    { material: 142, amount: 1 }
                ],
                previous: 35,
                upgrade: undefined
            },
            // Teostra
            undefined, undefined,
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
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 8, amount: 1 },
                    { material: 115, amount: 3 },
                    { material: 116, amount: 1 },
                    { material: 118, amount: 3 }
                ],
                previous: 4,
                upgrade: [42]
            },
            {
                id: 42,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 7, amount: 2 },
                    { material: 115, amount: 2 },
                    { material: 117, amount: 2 },
                    { material: 119, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ],
    [
        WeaponType.heavyBowgun, 
        [
            // Mineral
            {
                id: 1,
                name: EquipmentTree.mineral,
                base: true,
                rarity: 1,
                materials: undefined,
                previous: undefined,
                upgrade: [2, 7, 15, 17, 37, 39]
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
                upgrade: [5, 13, 25, 31, 41]
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
            {
                id: 7,
                name: EquipmentTree.greatJagras,
                rarity: 3,
                materials: [
                    { material: 21, amount: 1 },
                    { material: 42, amount: 3 },
                    { material: 43, amount: 1 },
                    { material: 44, amount: 1 }
                ],
                previous: 4,
                upgrade: [8]
            },
            {
                id: 8,
                name: EquipmentTree.greatJagras,
                rarity: 4,
                materials: [
                    { material: 22, amount: 1 },
                    { material: 42, amount: 2 },
                    { material: 44, amount: 2 },
                    { material: 45, amount: 2 }
                ],
                previous: 7,
                upgrade: undefined
            },
            // Barroth
            undefined, undefined,
            // Kulu-Ya-Ku
            undefined, undefined,
            // Tobi-Kadachi
            {
                id: 13,
                name: EquipmentTree.tobiKadachi,
                rarity: 3,
                materials: [
                    { material: 66, amount: 3 },
                    { material: 67, amount: 2 },
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
                    { material: 66, amount: 2 },
                    { material: 67, amount: 2 },
                    { material: 69, amount: 2 }
                ],
                previous: 13,
                upgrade: undefined
            },
            // Pukei-Pukei
            {
                id: 15,
                name: EquipmentTree.pukeiPukei,
                rarity: 3,
                materials: [
                    { material: 23, amount: 1 },
                    { material: 50, amount: 2 },
                    { material: 52, amount: 2 },
                    { material: 55, amount: 1 }
                ],
                previous: 1,
                upgrade: [16]
            },
            {
                id: 16,
                name: EquipmentTree.pukeiPukei,
                rarity: 4,
                materials: [
                    { material: 11, amount: 3 },
                    { material: 24, amount: 2 },
                    { material: 50, amount: 2 },
                    { material: 52, amount: 2 }
                ],
                previous: 15,
                upgrade: undefined
            },
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
            undefined, undefined,
            // Jyuratodus
            undefined, undefined,
            // Radobaan
            {
                id: 25,
                name: EquipmentTree.radobaan,
                rarity: 3,
                materials: [
                    { material: 26, amount: 2 },
                    { material: 84, amount: 3 },
                    { material: 87, amount: 2 }
                ],
                previous: 1,
                upgrade: [26]
            },
            {
                id: 26,
                name: EquipmentTree.radobaan,
                rarity: 4,
                materials: [
                    { material: 18, amount: 2 },
                    { material: 27, amount: 1 },
                    { material: 85, amount: 4 },
                    { material: 86, amount: 2 }
                ],
                previous: 25,
                upgrade: undefined
            },
            // Rathalos
            undefined, undefined,
            // Azure Rathalos
            undefined, undefined,
            // Diablos
            {
                id: 31,
                name: EquipmentTree.diablos,
                rarity: 3,
                materials: [
                    { material: 17, amount: 2 },
                    { material: 105, amount: 4 },
                    { material: 108, amount: 2 },
                    { material: 109, amount: 1 }
                ],
                previous: 4,
                upgrade: [32]
            },
            {
                id: 32,
                name: EquipmentTree.diablos,
                rarity: 4,
                materials: [
                    { material: 106, amount: 3 },
                    { material: 107, amount: 3 },
                    { material: 110, amount: 2 },
                    { material: 111, amount: 1 }
                ],
                previous: 31,
                upgrade: undefined
            },
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
            {
                id: 41,
                name: EquipmentTree.kirin,
                rarity: 4,
                materials: [
                    
                    { material: 8, amount: 1 },
                    { material: 115, amount: 3 },
                    { material: 116, amount: 1 },
                    { material: 118, amount: 3 }
                ],
                previous: 4,
                upgrade: [42]
            },
            {
                id: 42,
                name: EquipmentTree.kirin,
                rarity: 5,
                materials: [
                    { material: 7, amount: 2 },
                    { material: 115, amount: 2 },
                    { material: 117, amount: 2 },
                    { material: 119, amount: 2 }
                ],
                previous: 40,
                upgrade: undefined
            }
        ]
    ]
]);