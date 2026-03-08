import React, { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaOpencart, FaPalette } from "react-icons/fa";

const menulink = [
  { id: 1, name: "Home", link: "" },
  { id: 2, name: "About", link: "" },
  { id: 3, name: "Shop", link: "" },
  { id: 4, name: "Blogs", link: "" }
];

const themes = [
  // --- PURE WHITES & OFF-WHITES ---
  { name: "Light", class: "bg-white text-black", color: "bg-white border" },
  { name: "Pearl", class: "bg-[#ffffff] text-[#374151]", color: "bg-[#f3f4f6] border" },
  { name: "Ivory", class: "bg-[#fffff0] text-[#2f4f4f]", color: "bg-[#f5f5dc]" },
  { name: "White Sand", class: "bg-[#fafaf9] text-[#78716c]", color: "bg-[#f5f5f4]" },
  { name: "Linen", class: "bg-[#fafaf9] text-[#57534e]", color: "bg-[#e7e5e4]" },
  { name: "Mushroom", class: "bg-[#fafaf9] text-[#44403c]", color: "bg-[#d6d3d1]" },
  { name: "Ghost", class: "bg-[#f8fafc] text-[#475569]", color: "bg-[#e2e8f0]" },
  { name: "Sea Salt", class: "bg-[#f8f9fa] text-[#212529]", color: "bg-[#dee2e6]" },
  { name: "Cloudy Day", class: "bg-[#f8fafc] text-[#475569]", color: "bg-[#f1f5f9]" },
  
  // --- COOL LIGHTS (BLUE/MINT TONES) ---
  { name: "Arctic", class: "bg-[#f0f8ff] text-[#00274d]", color: "bg-[#add8e6]" },
  { name: "Breezy", class: "bg-[#f0ffff] text-[#008080]", color: "bg-[#afeeee]" },
  { name: "Ocean Foam", class: "bg-[#f0f9ff] text-[#0369a1]", color: "bg-[#bae6fd]" },
  { name: "Ice Cap", class: "bg-[#f0f9ff] text-[#0369a1]", color: "bg-[#e0f2fe]" },
  { name: "Glacial Blue", class: "bg-[#f0faff] text-[#005073]", color: "bg-[#71c5ee]" },
  { name: "Drift Ice", class: "bg-[#f3f9fb] text-[#1a3c40]", color: "bg-[#bee5eb]" },
  { name: "Mint Tea", class: "bg-[#f0fff4] text-[#22543d]", color: "bg-[#68d391]" },
  { name: "Honey Dew", class: "bg-[#f0fff4] text-[#166534]", color: "bg-[#dcfce7]" },
  { name: "Glade", class: "bg-[#f0fdf4] text-[#166534]", color: "bg-[#bbf7d0]" },
  { name: "Sea Mist", class: "bg-[#f0fdfa] text-[#0f766e]", color: "bg-[#99f6e4]" },
  { name: "Icy Mint", class: "bg-[#ecfdf5] text-[#065f46]", color: "bg-[#6ee7b7]" },
  { name: "Winter Mint", class: "bg-[#eafff5] text-[#004d3d]", color: "bg-[#a3ffd6]" },
  { name: "Aqua Ice", class: "bg-[#ecfeff] text-[#0e7490]", color: "bg-[#cffafe]" },
  { name: "Beryl", class: "bg-[#ecfeff] text-[#155e75]", color: "bg-[#a5f3fc]" },
  { name: "Sky", class: "bg-[#e1f5fe] text-[#01579b]", color: "bg-[#81d4fa]" },
  { name: "Polar", class: "bg-[#e0fbfc] text-[#293241]", color: "bg-[#98c1d9]" },
  { name: "Arctic Sky", class: "bg-[#e0f2fe] text-[#0c4a6e]", color: "bg-[#7dd3fc]" },
  { name: "Seafoam", class: "bg-[#ccfbf1] text-[#115e59]", color: "bg-[#5eead4]" },
  { name: "Blue Spruce", class: "bg-[#e0f2f1] text-[#004d40]", color: "bg-[#80cbc4]" },
  { name: "Mint", class: "bg-[#e8f5e9] text-[#1b5e20]", color: "bg-[#a5d6a7]" },
  
  // --- WARM LIGHTS (YELLOW/GOLD/PEACH) ---
  { name: "Lemon", class: "bg-[#fff9c4] text-[#33691e]", color: "bg-[#fbc02d]" },
  { name: "Lemonade", class: "bg-[#fff9db] text-[#f08c00]", color: "bg-[#ffe066]" },
  { name: "Daisy", class: "bg-[#fefce8] text-[#a16207]", color: "bg-[#fef08a]" },
  { name: "Citrus", class: "bg-[#fefce8] text-[#854d0e]", color: "bg-[#fde047]" },
  { name: "Honey", class: "bg-[#fffbeb] text-[#92400e]", color: "bg-[#fbbf24]" },
  { name: "Buttermilk", class: "bg-[#fffbeb] text-[#b45309]", color: "bg-[#fde68a]" },
  { name: "Golden Sand", class: "bg-[#fffbeb] text-[#b45309]", color: "bg-[#fef3c7]" },
  { name: "Champagne", class: "bg-[#f7e7ce] text-[#8e7618]", color: "bg-[#ead1dc]" },
  { name: "Parchment", class: "bg-[#fcf5e5] text-[#3b3c36]", color: "bg-[#e5e4e2]" },
  { name: "Sunset Gold", class: "bg-[#fdf0d5] text-[#780000]", color: "bg-[#c1121f]" },
  { name: "Peach", class: "bg-[#fff3e0] text-[#e65100]", color: "bg-[#ffcc80]" },
  { name: "Apricot", class: "bg-[#fff3e0] text-[#fb8c00]", color: "bg-[#ffb74d]" },
  { name: "Creamsicle", class: "bg-[#fffaf0] text-[#ea580c]", color: "bg-[#fed7aa]" },
  { name: "Cantaloupe", class: "bg-[#fff7ed] text-[#ea580c]", color: "bg-[#fdba74]" },
  { name: "Zest", class: "bg-[#fff7ed] text-[#9a3412]", color: "bg-[#fb923c]" },
  { name: "Pumpkin", class: "bg-[#fff7ed] text-[#c2410c]", color: "bg-[#ffedd5]" },
  { name: "Papaya", class: "bg-[#fff5ee] text-[#ff6700]", color: "bg-[#ffefd5]" },

  // --- PINK & PURPLE PASTELS ---
  { name: "Cotton Candy", class: "bg-[#fff0f5] text-[#ff69b4]", color: "bg-[#b0e0e6]" },
  { name: "Sakura", class: "bg-[#fce4ec] text-[#880e4f]", color: "bg-[#f48fb1]" },
  { name: "Candy", class: "bg-[#fff0f3] text-[#ff4d6d]", color: "bg-[#ff85a1]" },
  { name: "Flamingo", class: "bg-[#ffe4e1] text-[#c2185b]", color: "bg-[#ff8da1]" },
  { name: "Blush", class: "bg-[#fff9f9] text-[#db7093]", color: "bg-[#ffe4e1]" },
  { name: "Petal", class: "bg-[#fff1f2] text-[#9f1239]", color: "bg-[#fecdd3]" },
  { name: "Pink Fizz", class: "bg-[#fff1f2] text-[#be123c]", color: "bg-[#fda4af]" },
  { name: "Wild Rose", class: "bg-[#fff1f2] text-[#e11d48]", color: "bg-[#ffe4e6]" },
  { name: "Peony", class: "bg-[#fdf2f8] text-[#9d174d]", color: "bg-[#fbcfe8]" },
  { name: "Lavender", class: "bg-purple-100 text-purple-900", color: "bg-purple-500" },
  { name: "Soft Lilac", class: "bg-[#faf5ff] text-[#6b21a8]", color: "bg-[#d8b4fe]" },
  { name: "Amethyst Light", class: "bg-[#faf5ff] text-[#7e22ce]", color: "bg-[#f3e8ff]" },
  { name: "Wisteria", class: "bg-[#f5f3ff] text-[#5b21b6]", color: "bg-[#c4b5fd]" },
  { name: "Lavender Petal", class: "bg-[#f5f3ff] text-[#6d28d9]", color: "bg-[#ede9fe]" },
  { name: "Periwinkle", class: "bg-[#e8eaf6] text-[#3f51b5]", color: "bg-[#9fa8da]" },

  // --- NEUTRAL SOFT GRAYS ---
  { name: "Mist", class: "bg-[#f1f1f1] text-[#424242]", color: "bg-[#90a4ae]" },
  { name: "Cloud", class: "bg-[#eceff1] text-[#263238]", color: "bg-[#b0bec5]" },
  { name: "Oatmeal", class: "bg-[#f5f5dc] text-[#4b3621]", color: "bg-[#d2b48c]" },
  { name: "Bone", class: "bg-[#e3dac9] text-[#3d3635]", color: "bg-[#c9c0bb]" },
  { name: "Zinc", class: "bg-[#f4f4f5] text-[#18181b]", color: "bg-[#71717a]" },
  { name: "Matcha", class: "bg-[#cfdfbc] text-[#3e4a36]", color: "bg-[#8da377]" },
  { name: "Sage", class: "bg-[#d4d9d4] text-[#2d3436]", color: "bg-[#8fa998]" },
  { name: "Pebble", class: "bg-[#f5f5f4] text-[#57534e]", color: "bg-[#a8a29e]" },
  { name: "Desert", class: "bg-[#edc9af] text-[#5d4037]", color: "bg-[#c19a6b]" },
  { name: "Sand", class: "bg-[#c2b280] text-[#3e2723]", color: "bg-[#e1c16e]" },
  { name: "Pear", class: "bg-[#d1e05b] text-[#333d01]", color: "bg-[#a4b42b]" },
  { name: "Bumblebee", class: "bg-[#ffca28] text-[#212121]", color: "bg-[#000000]" },
  { name: "Turmeric", class: "bg-[#ffab00] text-[#3e2723]", color: "bg-[#ff8f00]" },
  { name: "Saffron", class: "bg-[#f4c430] text-[#4a3728]", color: "bg-[#ff9933]" },
  { name: "Peach Fuzz", class: "bg-[#ffbe98] text-[#5c3d2e]", color: "bg-[#ff8b6b]" },
  { name: "Clay", class: "bg-[#b07d62] text-[#ffe8d6]", color: "bg-[#8a5a44]" },
  { name: "Terracotta Glow", class: "bg-[#e2725b] text-[#2d140f]", color: "bg-[#a13d2d]" },
  { name: "Gravel", class: "bg-[#9e9e9e] text-[#212121]", color: "bg-[#616161]" },
  { name: "Titanium", class: "bg-[#212529] text-[#e9ecef]", color: "bg-[#adb5bd]" },
  { name: "Steel", class: "bg-[#71797e] text-[#f5f5f5]", color: "bg-[#4682b4]" },
  { name: "Stone", class: "bg-[#455a64] text-[#cfd8dc]", color: "bg-[#607d8b]" },
  { name: "Dolphin", class: "bg-[#708090] text-[#f0f8ff]", color: "bg-[#4682b4]" },
  { name: "Aero", class: "bg-[#7cb9e8] text-[#00308f]", color: "bg-[#1974d2]" },
  { name: "Periwinkle", class: "bg-[#e8eaf6] text-[#3f51b5]", color: "bg-[#9fa8da]" },
  { name: "Bubblegum", class: "bg-[#ffc1cc] text-[#880e4f]", color: "bg-[#f06292]" },

  // --- TIER 4: RICH & SATURATED COLORS ---
  { name: "Oceanic", class: "bg-[#0077b6] text-[#caf0f8]", color: "bg-[#00b4d8]" },
  { name: "Denim", class: "bg-[#1565c0] text-[#e3f2fd]", color: "bg-[#0d47a1]" },
  { name: "Electric Blue", class: "bg-[#0000ff] text-[#ffffff]", color: "bg-[#00008b]" },
  { name: "Royal", class: "bg-[#1a237e] text-[#e8eaf6]", color: "bg-[#303f9f]" },
  { name: "Indigo", class: "bg-[#283593] text-white", color: "bg-[#3f51b5]" },
  { name: "Jade Garden", class: "bg-[#065f46] text-[#ecfdf5]", color: "bg-[#10b981]" },
  { name: "Emerald", class: "bg-green-900 text-green-100", color: "bg-green-600" },
  { name: "Crimson", class: "bg-red-900 text-red-50", color: "bg-red-700" },
  { name: "Velvet Red", class: "bg-[#7f1d1d] text-[#fee2e2]", color: "bg-[#b91c1c]" },
  { name: "Bordeaux", class: "bg-[#4c0519] text-[#fecdd3]", color: "bg-[#881337]" },
  { name: "Deep Purple", class: "bg-[#1a0633] text-[#e0aaff]", color: "bg-[#3c096c]" },
  { name: "Aubergine", class: "bg-[#301934] text-[#e6e6fa]", color: "bg-[#4b0082]" },

  // --- TIER 5: THE DARKEST SHADES (OLED & HARD DARKS) ---
  { name: "Slate Rock", class: "bg-[#0f172a] text-[#cbd5e1]", color: "bg-[#1e293b]" },
  { name: "Nordic", class: "bg-[#2e3440] text-[#d8dee9]", color: "bg-[#4c566a]" },
  { name: "Graphite Dark", class: "bg-[#18181b] text-[#a1a1aa]", color: "bg-[#27272a]" },
  { name: "Charcoal Sky", class: "bg-[#1f2937] text-[#f9fafb]", color: "bg-[#374151]" },
  { name: "Dark", class: "bg-gray-900 text-white", color: "bg-gray-900" },
  { name: "Midnight Teal", class: "bg-[#042f2e] text-[#2dd4bf]", color: "bg-[#115e59]" },
  { name: "Petrol", class: "bg-[#002b36] text-[#93a1a1]", color: "bg-[#073642]" },
  { name: "Deep Sea", class: "bg-[#001219] text-[#94d2bd]", color: "bg-[#005f73]" },
  { name: "Abyss", class: "bg-[#050505] text-[#00ffcc]", color: "bg-[#0a192f]" },
  { name: "Nightshade", class: "bg-[#020617] text-[#94a3b8]", color: "bg-[#1e293b]" },
  { name: "Midnight", class: "bg-black text-slate-300", color: "bg-slate-900" },
  { name: "Charcoal", class: "bg-[#121212] text-[#e0e0e0]", color: "bg-[#212121]" },
  { name: "Espresso", class: "bg-[#211a1d] text-[#f8f1ff]", color: "bg-[#463f3a]" },
  { name: "Coffee", class: "bg-[#3e2723] text-[#d7ccc8]", color: "bg-[#5d4037]" },
  { name: "Black Forest", class: "bg-[#0b1a0e] text-[#a3b18a]", color: "bg-[#344e41]" },
  { name: "Ink", class: "bg-[#000000] text-[#a5a5a5]", color: "bg-[#1a1a2e]" },
  { name: "Obsidian", class: "bg-[#0a0a0a] text-[#f5f5f5]", color: "bg-[#1a1a1a]" },
  { name: "Cyberpunk", class: "bg-black text-[#00ff41]", color: "bg-green-500 border-neon" },
  { name: "Highlighter", class: "bg-[#000000] text-[#ccff00]", color: "bg-[#aaff00]" },
  { name: "Black Hole", class: "bg-[#020617] text-[#f8fafc]", color: "bg-[#000000]" },
  { name: "Void", class: "bg-[#020617] text-[#64748b]", color: "bg-[#000000]" },
  { name: "Sunset", class: "bg-[#f4a261] text-[#264653]", color: "bg-[#e76f51]" },
  { name: "Copper", class: "bg-[#b87333] text-[#ffffff]", color: "bg-[#8b4513]" },
  { name: "Sepia", class: "bg-[#704214] text-[#f5f5dc]", color: "bg-[#4b3621]" },
  { name: "Terracotta", class: "bg-[#e2725b] text-[#ffffff]", color: "bg-[#8a3324]" },
  { name: "Rustic", class: "bg-[#a0522d] text-[#ffffff]", color: "bg-[#5d2e17]" },
  { name: "Bronze", class: "bg-[#cd7f32] text-[#ffffff]", color: "bg-[#804a00]" },
  { name: "Mars", class: "bg-[#99522c] text-[#ffe4d6]", color: "bg-[#743410]" },
  { name: "Cayenne", class: "bg-[#9b111e] text-[#ffffff]", color: "bg-[#6a0d15]" },

  // --- HARD GREENS & OLIVES ---
  { name: "Moss", class: "bg-[#8a9a5b] text-[#2f3521]", color: "bg-[#4b5320]" },
  { name: "Cactus", class: "bg-[#5e716a] text-[#f0f2f1]", color: "bg-[#354a40]" },
  { name: "Olive", class: "bg-[#808000] text-[#ffffff]", color: "bg-[#556b2f]" },
  { name: "Jade", class: "bg-[#00a86b] text-[#ffffff]", color: "bg-[#00703c]" },
  { name: "Forest", class: "bg-[#228b22] text-[#ffffff]", color: "bg-[#013220]" },
  { name: "Seaweed", class: "bg-[#354e48] text-[#d1dce2]", color: "bg-[#1a2e2a]" },
  { name: "Fern", class: "bg-[#4f7942] text-[#ffffff]", color: "bg-[#2d4a22]" },

  // --- HARD BLUES & TEALS ---
  { name: "Atlantic", class: "bg-[#006994] text-[#ffffff]", color: "bg-[#004d6e]" },
  { name: "Cobalt Night", class: "bg-[#0047ab] text-[#e0e0e0]", color: "bg-[#002366]" },
  { name: "Sapphire", class: "bg-[#0f52ba] text-[#ffffff]", color: "bg-[#083175]" },
  { name: "Teal", class: "bg-[#008080] text-[#ffffff]", color: "bg-[#004d4d]" },
  { name: "Ocean", class: "bg-[#0077be] text-[#ffffff]", color: "bg-[#005689]" },
  { name: "Lapis", class: "bg-[#26619c] text-[#ffffff]", color: "bg-[#163554]" },
  { name: "Petrol Blue", class: "bg-[#005f6b] text-[#e0f7fa]", color: "bg-[#003d45]" },

  // --- HARD PURPLES & PINKS ---
  { name: "Violet", class: "bg-[#8f00ff] text-[#ffffff]", color: "bg-[#4b0082]" },
  { name: "Grape", class: "bg-[#6f2da8] text-[#ffffff]", color: "bg-[#481f62]" },
  { name: "Berry", class: "bg-[#8a2be2] text-[#ffffff]", color: "bg-[#4b0082]" },
  { name: "Wine", class: "bg-[#722f37] text-[#ffffff]", color: "bg-[#3e1a1d]" },
  { name: "Magenta", class: "bg-[#8b008b] text-[#ffffff]", color: "bg-[#4b004b]" },
  { name: "Fuschia", class: "bg-[#ff00ff] text-[#ffffff]", color: "bg-[#8b008b]" },

  // --- MID-RANGE EARTH & GREY ---
  { name: "Camel", class: "bg-[#c19a6b] text-[#3e2723]", color: "bg-[#8b5a2b]" },
  { name: "Khaki", class: "bg-[#f0e68c] text-[#4b5320]", color: "bg-[#bdb76b]" },
  { name: "Driftwood", class: "bg-[#967444] text-[#ffffff]", color: "bg-[#5e4b32]" },
  { name: "Midas", class: "bg-[#d4af37] text-[#3e2723]", color: "bg-[#996515]" },
  { name: "Slate", class: "bg-[#708090] text-[#ffffff]", color: "bg-[#2f4f4f]" },
  { name: "Ash", class: "bg-[#b2beb5] text-[#36454f]", color: "bg-[#70827d]" },
  { name: "Silver", class: "bg-[#c0c0c0] text-[#000000]", color: "bg-[#e5e7eb]" },
  { name: "Ash", class: "bg-[#b2beb5] text-[#36454f]", color: "bg-[#70827d]" },
  { name: "Smoke", class: "bg-[#848884] text-[#ffffff]", color: "bg-[#555555]" },
  { name: "Nickel", class: "bg-[#727472] text-[#f5f5f5]", color: "bg-[#4b4c4b]" },
  { name: "Gunmetal", class: "bg-[#2a3439] text-[#dcdcdc]", color: "bg-[#1b2429]" },
  { name: "Iron", class: "bg-[#434b4d] text-[#ffffff]", color: "bg-[#2f353b]" },

  // --- THE EARTHY & ORGANIC (Remaining) ---
  { name: "Pecan", class: "bg-[#483c32] text-[#d2b48c]", color: "bg-[#5c4033]" },
  { name: "Walnut", class: "bg-[#432616] text-[#e8dcc4]", color: "bg-[#2e1a0d]" },
  { name: "Hickory", class: "bg-[#351c10] text-[#f0e4d7]", color: "bg-[#24130b]" },
  { name: "Cacao", class: "bg-[#3d1c02] text-[#f7e7ce]", color: "bg-[#2b1301]" },
  { name: "Sea Moss", class: "bg-[#4d5d53] text-[#e2ede4]", color: "bg-[#2e3b33]" },
  { name: "Deep Forest", class: "bg-[#1b2e1b] text-[#9dc183]", color: "bg-[#0b140b]" },
  { name: "Swamp", class: "bg-[#2d3a27] text-[#a5b89c]", color: "bg-[#1a2117]" },

  // --- THE NEON & HIGH CONTRAST (Specialty) ---
  { name: "Matrix", class: "bg-black text-[#00ff00]", color: "bg-[#003b00] border-green-500" },
  { name: "Synthwave", class: "bg-[#2b0054] text-[#ff00ff]", color: "bg-[#ff71ce]" },
  { name: "Hot Pink", class: "bg-[#000000] text-[#ff69b4]", color: "bg-[#ff1493]" },
  { name: "Electric Purple", class: "bg-[#120024] text-[#bc13fe]", color: "bg-[#8a2be2]" },
  { name: "Nuclear", class: "bg-[#000000] text-[#ccff00]", color: "bg-[#dfff00]" },
  { name: "Lava", class: "bg-[#1a0000] text-[#ff4500]", color: "bg-[#ff0000]" },

  // --- THE MUTED & SOPHISTICATED ---
  { name: "Dusty Rose", class: "bg-[#dcae96] text-[#503421]", color: "bg-[#bb8a72]" },
  { name: "Storm", class: "bg-[#4f5b66] text-[#ffffff]", color: "bg-[#343d46]" },
  { name: "Shadow Blue", class: "bg-[#778899] text-[#f0f8ff]", color: "bg-[#2f4f4f]" },
  { name: "Muted Teal", class: "bg-[#5f9ea0] text-[#ffffff]", color: "bg-[#3d6466]" },
  { name: "Cadet", class: "bg-[#536878] text-[#f0f2f5]", color: "bg-[#29353e]" },
  { name: "Bison", class: "bg-[#3c2f2f] text-[#be9b7b]", color: "bg-[#4b3832]" },
  { name: "Raisin", class: "bg-[#242124] text-[#ebebeb]", color: "bg-[#1b191b]" }
];
export const Navbar = ({ setTheme }) => {
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  return (
    <nav className="flex gap-20 justify-between shadow-2xl px-4 items-center relative">
      {/* left side */}
      <div className="py-5 flex items-center">
        <a className="uppercase text-red-800 font-bold text-5xl" href="/"> E-shop</a>
      
      </div>

      {/* right side */}
      <div className="flex items-center p-3 gap-4">
        
       
        <div className="relative">
          <button 
            onClick={() => setIsThemeOpen(!isThemeOpen)}
            className="p-2 rounded-full w-[5rem] hover:bg-gray-200 transition-colors"
          >
            <FaPalette className="text-2xl cursor-pointer text-gray-600 hover:text-red-800" />
          </button>

        {isThemeOpen && (
 
  <div className="absolute right-0 top-12 bg-white border shadow-2xl rounded-xl p-5 z-[100] w-[20rem] sm:w-max animate-in fade-in zoom-in duration-200">
    <div className="flex justify-between items-center mb-3 border-b pb-2">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select Theme</p>
      <button onClick={() => setIsThemeOpen(false)} className="text-gray-400 hover:text-black">✕</button>
    </div>

  
    <div className="grid grid-cols-6 sm:grid-cols-10 gap-4 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
      {themes.map((t, index) => (
        <button
          key={index}
          onClick={() => {
            setTheme(t.class);
            setIsThemeOpen(false);
          }}
          title={t.name}
          className={`w-8 h-8 rounded-full ${t.color} hover:scale-125 transition-all shadow-md border border-gray-200 shrink-0`}
        ></button>
      ))}
    </div>
  </div>
)}
        </div>

    
        <div className="flex relative group items-center">
          <input type="text" placeholder="Search" className="w-0 group-hover:w-[150px] group-hover:border rounded-full px-0 group-hover:px-4 duration-500 outline-none bg-transparent" />
          <CiSearch className="text-2xl cursor-pointer" />
        </div>
        <div className='relative p-3'>
          <FaOpencart className="text-2xl" />
          <span className='text-white bg-red-700 rounded-full absolute top-1 right-1 flex items-center justify-center text-[10px] w-4 h-4'>4</span>
        </div>
      </div>
    </nav>
  );
};