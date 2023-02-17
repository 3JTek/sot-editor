export type Card = {
  Name: string;
  Rarity: Rarity;
  Type: Type;
  Tribe: Tribe;
  God: God;
  Mana: number;
  Attack: number;
  Health: number;
  Description: string;
  ArtID: string;
  GlobalID: number;
  LibraryID: string;
  Packable: boolean;
  Set: Set;
  Collectable: boolean;
  Live: boolean;
  Released: boolean;
};

export type Type = "Creature" | "Spell" | "Ability" | "PickOne" | "Weapon";

export type God =
  | "Neutral"
  | "Death"
  | "War"
  | "Light"
  | "Magic"
  | "Deception"
  | "Nature";

export type Set =
  | "Core"
  | "Genesis"
  | "Etherbot"
  | "Mythic"
  | "Promo"
  | "Trial"
  | "Order"
  | "Tutorial"
  | "Mortal"
  | "Verdict"
  | "Wander"
  | "Wolf";

export type Tribe =
  | "Viking"
  | "Amazon"
  | "Aether"
  | "Atlantean"
  | "Olympian"
  | "Nether"
  | "Anubian"
  | "Dragon"
  | "Wild"
  | "Mystic"
  | "Structure"
  | "Guild"
  | "Blessing";

export type Rarity = "Common" | "Rare" | "Epic" | "Legendary" | "Mythic";
