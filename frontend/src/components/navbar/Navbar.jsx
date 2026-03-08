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
  { name: "Light", class: "bg-white text-black", color: "bg-white border" },
  { name: "Dark", class: "bg-gray-900 text-white", color: "bg-gray-900" },
  { name: "Ocean", class: "bg-blue-900 text-blue-100", color: "bg-blue-700" },
  { name: "Emerald", class: "bg-green-900 text-green-100", color: "bg-green-600" },
  { name: "Sunset", class: "bg-orange-100 text-orange-900", color: "bg-orange-500" },
  { name: "Lavender", class: "bg-purple-100 text-purple-900", color: "bg-purple-500" },
  { name: "Rose", class: "bg-pink-100 text-pink-900", color: "bg-pink-500" },
  { name: "Midnight", class: "bg-black text-slate-300", color: "bg-slate-900" },
  { name: "Forest", class: "bg-green-100 text-green-900", color: "bg-emerald-800" },
  { name: "Amber", class: "bg-amber-50 text-amber-900", color: "bg-amber-500" },
  { name: "Slate", class: "bg-slate-800 text-slate-100", color: "bg-slate-700" },
  { name: "Coffee", class: "bg-[#3e2723] text-[#d7ccc8]", color: "bg-[#5d4037]" },
  { name: "Olive", class: "bg-[#33691e] text-[#f1f8e9]", color: "bg-[#558b2f]" },
  { name: "Desert", class: "bg-[#edc9af] text-[#5d4037]", color: "bg-[#c19a6b]" },
  { name: "Stone", class: "bg-[#455a64] text-[#cfd8dc]", color: "bg-[#607d8b]" },
  { name: "Crimson", class: "bg-red-900 text-red-50", color: "bg-red-700" },
  { name: "Cyberpunk", class: "bg-black text-[#00ff41]", color: "bg-green-500 border-neon" },
  { name: "Violet", class: "bg-[#4a148c] text-[#f3e5f5]", color: "bg-[#7b1fa2]" },
  { name: "Gold", class: "bg-[#fff8e1] text-[#795548]", color: "bg-yellow-500" },
  { name: "Royal", class: "bg-[#1a237e] text-[#e8eaf6]", color: "bg-[#303f9f]" },
  { name: "Mint", class: "bg-[#e8f5e9] text-[#1b5e20]", color: "bg-[#a5d6a7]" },
  { name: "Sky", class: "bg-[#e1f5fe] text-[#01579b]", color: "bg-[#81d4fa]" },
  { name: "Peach", class: "bg-[#fff3e0] text-[#e65100]", color: "bg-[#ffcc80]" },
  { name: "Cloud", class: "bg-[#eceff1] text-[#263238]", color: "bg-[#b0bec5]" },
  { name: "Sakura", class: "bg-[#fce4ec] text-[#880e4f]", color: "bg-[#f48fb1]" },
  { name: "Deep Sea", class: "bg-[#001219] text-[#94d2bd]", color: "bg-[#005f73]" },
  { name: "Charcoal", class: "bg-[#121212] text-[#e0e0e0]", color: "bg-[#212121]" },
  { name: "Indigo", class: "bg-[#283593] text-white", color: "bg-[#3f51b5]" },
  { name: "Wine", class: "bg-[#2c001e] text-[#aea79f]", color: "bg-[#7b1113]" },
  { name: "Nordic", class: "bg-[#2e3440] text-[#d8dee9]", color: "bg-[#4c566a]" },
{ name: "Neon Blue", class: "bg-[#000814] text-[#00f5ff]", color: "bg-[#00b4d8]" },
{ name: "Terracotta", class: "bg-[#a44a3f] text-[#fefae0]", color: "bg-[#8b3a30]" },
{ name: "Moss", class: "bg-[#283618] text-[#fefae0]", color: "bg-[#606c38]" },
{ name: "Titanium", class: "bg-[#212529] text-[#e9ecef]", color: "bg-[#adb5bd]" },
{ name: "Lemon", class: "bg-[#fff9c4] text-[#33691e]", color: "bg-[#fbc02d]" },
{ name: "Maroon", class: "bg-[#4a0404] text-[#ffcdd2]", color: "bg-[#800000]" },
{ name: "Orchid", class: "bg-[#f3e5f5] text-[#4a148c]", color: "bg-[#ba68c8]" },
{ name: "Teal", class: "bg-[#004d40] text-[#e0f2f1]", color: "bg-[#008080]" },
{ name: "Sepia", class: "bg-[#704214] text-[#f5f5dc]", color: "bg-[#a52a2a]" },
{ name: "Space", class: "bg-[#0b0d17] text-[#d1d5db]", color: "bg-[#1f2937]" },
{ name: "Sage", class: "bg-[#d4d9d4] text-[#2d3436]", color: "bg-[#8fa998]" },
{ name: "Grape", class: "bg-[#2d004d] text-[#e1bee7]", color: "bg-[#6a1b9a]" },
{ name: "Copper", class: "bg-[#3e2723] text-[#ffccbc]", color: "bg-[#d84315]" },
{ name: "Arctic", class: "bg-[#f0f8ff] text-[#00274d]", color: "bg-[#add8e6]" },
{ name: "Espresso", class: "bg-[#211a1d] text-[#f8f1ff]", color: "bg-[#463f3a]" },
{ name: "Bumblebee", class: "bg-[#ffca28] text-[#212121]", color: "bg-[#000000]" },
{ name: "Galaxy", class: "bg-[#1a1a2e] text-[#e94560]", color: "bg-[#16213e]" },
{ name: "Flamingo", class: "bg-[#ffe4e1] text-[#c2185b]", color: "bg-[#ff8da1]" },
{ name: "Emerald Night", class: "bg-[#022c22] text-[#34d399]", color: "bg-[#059669]" },
{ name: "Oatmeal", class: "bg-[#f5f5dc] text-[#4b3621]", color: "bg-[#d2b48c]" },
{ name: "Electric Purple", class: "bg-[#12002b] text-[#bf00ff]", color: "bg-[#7000ff]" },
{ name: "Sand", class: "bg-[#c2b280] text-[#3e2723]", color: "bg-[#e1c16e]" },
{ name: "Steel", class: "bg-[#71797e] text-[#f5f5f5]", color: "bg-[#4682b4]" },
{ name: "Berry", class: "bg-[#5d0e41] text-[#f8bbd0]", color: "bg-[#ad1457]" },
{ name: "Aqua", class: "bg-[#e0f7fa] text-[#006064]", color: "bg-[#26c6da]" },
{ name: "Bronze", class: "bg-[#332211] text-[#cd7f32]", color: "bg-[#804a00]" },
{ name: "Mist", class: "bg-[#f1f1f1] text-[#424242]", color: "bg-[#90a4ae]" },
{ name: "Ruby", class: "bg-[#900c3f] text-[#ffcdd2]", color: "bg-[#c70039]" },
{ name: "Navy Blue", class: "bg-[#000080] text-[#ffffff]", color: "bg-[#0000cd]" },
{ name: "Matcha", class: "bg-[#cfdfbc] text-[#3e4a36]", color: "bg-[#8da377]" },
{ name: "Abyss", class: "bg-[#050505] text-[#00ffcc]", color: "bg-[#0a192f]" },
{ name: "Pistachio", class: "bg-[#e7f5dc] text-[#3d5a2d]", color: "bg-[#93c47d]" },
{ name: "Crimson Sky", class: "bg-[#3d0000] text-[#ff4d4d]", color: "bg-[#990000]" },
{ name: "Sandstone", class: "bg-[#d2b48c] text-[#4a3728]", color: "bg-[#a67c52]" },
{ name: "Galaxy Blue", class: "bg-[#16213e] text-[#e94560]", color: "bg-[#0f3460]" },
{ name: "Peach Fuzz", class: "bg-[#ffbe98] text-[#5c3d2e]", color: "bg-[#ff8b6b]" },
{ name: "Dolphin", class: "bg-[#708090] text-[#f0f8ff]", color: "bg-[#4682b4]" },
{ name: "Neon Grape", class: "bg-[#240046] text-[#ff00ff]", color: "bg-[#7b2cbf]" },
{ name: "Turmeric", class: "bg-[#ffab00] text-[#3e2723]", color: "bg-[#ff8f00]" },
{ name: "Ivory", class: "bg-[#fffff0] text-[#2f4f4f]", color: "bg-[#f5f5dc]" },
{ name: "Black Forest", class: "bg-[#0b1a0e] text-[#a3b18a]", color: "bg-[#344e41]" },
{ name: "Candy", class: "bg-[#fff0f3] text-[#ff4d6d]", color: "bg-[#ff85a1]" },
{ name: "Storm", class: "bg-[#2c3e50] text-[#ecf0f1]", color: "bg-[#34495e]" },
{ name: "Midas", class: "bg-[#212121] text-[#ffd700]", color: "bg-[#daa520]" },
{ name: "Mint Tea", class: "bg-[#f0fff4] text-[#22543d]", color: "bg-[#68d391]" },
{ name: "Deep Purple", class: "bg-[#1a0633] text-[#e0aaff]", color: "bg-[#3c096c]" },
{ name: "Clay", class: "bg-[#b07d62] text-[#ffe8d6]", color: "bg-[#8a5a44]" },
{ name: "Polar", class: "bg-[#e0fbfc] text-[#293241]", color: "bg-[#98c1d9]" },
{ name: "Volcano", class: "bg-[#1b1b1b] text-[#ff4e00]", color: "bg-[#800e13]" },
{ name: "Denim", class: "bg-[#1565c0] text-[#e3f2fd]", color: "bg-[#0d47a1]" },
{ name: "Pear", class: "bg-[#d1e05b] text-[#333d01]", color: "bg-[#a4b42b]" },
{ name: "Aubergine", class: "bg-[#301934] text-[#e6e6fa]", color: "bg-[#4b0082]" },
{ name: "Sunset Gold", class: "bg-[#fdf0d5] text-[#780000]", color: "bg-[#c1121f]" },
{ name: "Graphite", class: "bg-[#36454f] text-[#ffffff]", color: "bg-[#1c1c1c]" },
{ name: "Blueberry", class: "bg-[#6b7fd7] text-[#1d2d50]", color: "bg-[#485696]" },
{ name: "Terracotta Glow", class: "bg-[#e2725b] text-[#2d140f]", color: "bg-[#a13d2d]" },
{ name: "Highlighter", class: "bg-[#000000] text-[#ccff00]", color: "bg-[#aaff00]" },
{ name: "Antique", class: "bg-[#faebd7] text-[#5d4037]", color: "bg-[#d2b48c]" },
{ name: "Shadow", class: "bg-[#1a1a1a] text-[#757575]", color: "bg-[#424242]" },
{ name: "Electric Blue", class: "bg-[#0000ff] text-[#ffffff]", color: "bg-[#00008b]" },
{ name: "Matcha Latte", class: "bg-[#e9edc9] text-[#606c38]", color: "bg-[#ccd5ae]" },
{ name: "Bordeaux", class: "bg-[#4c0519] text-[#fecdd3]", color: "bg-[#881337]" },
{ name: "Lemonade", class: "bg-[#fff9db] text-[#f08c00]", color: "bg-[#ffe066]" },
{ name: "Iron", class: "bg-[#495057] text-[#f8f9fa]", color: "bg-[#212529]" },
{ name: "Oceanic", class: "bg-[#0077b6] text-[#caf0f8]", color: "bg-[#00b4d8]" },
{ name: "Rustic", class: "bg-[#4e342e] text-[#ede7f6]", color: "bg-[#6d4c41]" },
{ name: "Periwinkle", class: "bg-[#e8eaf6] text-[#3f51b5]", color: "bg-[#9fa8da]" },
{ name: "Jade", class: "bg-[#00a86b] text-[#f0fff0]", color: "bg-[#008b8b]" },
{ name: "Coal", class: "bg-[#0f0f0f] text-[#b0b0b0]", color: "bg-[#333333]" },
{ name: "Apricot", class: "bg-[#fff3e0] text-[#fb8c00]", color: "bg-[#ffb74d]" },
{ name: "Petrol", class: "bg-[#002b36] text-[#93a1a1]", color: "bg-[#073642]" },
{ name: "Bubblegum", class: "bg-[#ffc1cc] text-[#880e4f]", color: "bg-[#f06292]" },
{ name: "Driftwood", class: "bg-[#8d6e63] text-[#efebe9]", color: "bg-[#5d4037]" },
{ name: "Neon Lime", class: "bg-[#1a1a1a] text-[#32cd32]", color: "bg-[#00ff00]" },
{ name: "Cobalt", class: "bg-[#0047ab] text-[#ffffff]", color: "bg-[#002366]" },
{ name: "Champagne", class: "bg-[#f7e7ce] text-[#8e7618]", color: "bg-[#ead1dc]" },
{ name: "Velvet", class: "bg-[#210124] text-[#fdeff4]", color: "bg-[#540d6e]" },
{ name: "Zinc", class: "bg-[#f4f4f5] text-[#18181b]", color: "bg-[#71717a]" },
{ name: "Oasis", class: "bg-[#80ffdb] text-[#22577a]", color: "bg-[#57cc99]" },
{ name: "Bison", class: "bg-[#3c2f2f] text-[#be9b7b]", color: "bg-[#4b3832]" },
{ name: "Cactus", class: "bg-[#2d5a27] text-[#e8f5e9]", color: "bg-[#4caf50]" },
{ name: "Uranium", class: "bg-[#0a0a0a] text-[#afec1a]", color: "bg-[#203000]" },
{ name: "Saffron", class: "bg-[#f4c430] text-[#4a3728]", color: "bg-[#ff9933]" },
{ name: "Gravel", class: "bg-[#9e9e9e] text-[#212121]", color: "bg-[#616161]" },
{ name: "Peacock", class: "bg-[#004953] text-[#b2ffff]", color: "bg-[#008080]" },
{ name: "Toffee", class: "bg-[#af6e4d] text-[#fff8f1]", color: "bg-[#8b4513]" },
{ name: "Aero", class: "bg-[#7cb9e8] text-[#00308f]", color: "bg-[#1974d2]" },
{ name: "Plum", class: "bg-[#4b0082] text-[#dda0dd]", color: "bg-[#8e4585]" },
{ name: "Bone", class: "bg-[#e3dac9] text-[#3d3635]", color: "bg-[#c9c0bb]" },
{ name: "Ink", class: "bg-[#000000] text-[#a5a5a5]", color: "bg-[#1a1a2e]" },
{ name: "Cyber Lime", class: "bg-[#000000] text-[#ccff00]", color: "bg-[#84cc16]" },
{ name: "Deep Blush", class: "bg-[#4a0e0e] text-[#ffd1d1]", color: "bg-[#be123c]" },
{ name: "Ocean Foam", class: "bg-[#f0f9ff] text-[#0369a1]", color: "bg-[#bae6fd]" },
{ name: "Thunder", class: "bg-[#1e1b4b] text-[#c7d2fe]", color: "bg-[#312e81]" },
{ name: "Honey", class: "bg-[#fffbeb] text-[#92400e]", color: "bg-[#fbbf24]" },
{ name: "Deep Forest", class: "bg-[#064e3b] text-[#d1fae5]", color: "bg-[#059669]" },
{ name: "Mulberry", class: "bg-[#2d0a1a] text-[#fbcfe8]", color: "bg-[#701a75]" },
{ name: "Arctic Sky", class: "bg-[#e0f2fe] text-[#0c4a6e]", color: "bg-[#7dd3fc]" },
{ name: "Burnt Sienna", class: "bg-[#431407] text-[#ffedd5]", color: "bg-[#9a3412]" },
{ name: "Ghost", class: "bg-[#f8fafc] text-[#475569]", color: "bg-[#e2e8f0]" },
{ name: "Nightshade", class: "bg-[#020617] text-[#94a3b8]", color: "bg-[#1e293b]" },
{ name: "Zest", class: "bg-[#fff7ed] text-[#9a3412]", color: "bg-[#fb923c]" },
{ name: "Icy Mint", class: "bg-[#ecfdf5] text-[#065f46]", color: "bg-[#6ee7b7]" },
{ name: "Bonsai", class: "bg-[#14532d] text-[#dcfce7]", color: "bg-[#166534]" },
{ name: "Twilight", class: "bg-[#312e81] text-[#e0e7ff]", color: "bg-[#4338ca]" },
{ name: "Petal", class: "bg-[#fff1f2] text-[#9f1239]", color: "bg-[#fecdd3]" },
{ name: "Cobalt Night", class: "bg-[#172554] text-[#dbeafe]", color: "bg-[#1e40af]" },
{ name: "Ember", class: "bg-[#450a0a] text-[#fecaca]", color: "bg-[#991b1b]" },
{ name: "Suede", class: "bg-[#27272a] text-[#f4f4f5]", color: "bg-[#52525b]" },
{ name: "Limelight", class: "bg-[#f7fee7] text-[#3f6212]", color: "bg-[#bef264]" },
{ name: "Atlantis", class: "bg-[#0c4a6e] text-[#e0f2fe]", color: "bg-[#0284c7]" },
{ name: "Mushroom", class: "bg-[#fafaf9] text-[#44403c]", color: "bg-[#d6d3d1]" },
{ name: "Velvet Red", class: "bg-[#7f1d1d] text-[#fee2e2]", color: "bg-[#b91c1c]" },
{ name: "Dune", class: "bg-[#78350f] text-[#fef3c7]", color: "bg-[#b45309]" },
{ name: "Amethyst", class: "bg-[#581c87] text-[#f3e8ff]", color: "bg-[#9333ea]" },
{ name: "Glacier", class: "bg-[#f0f9ff] text-[#075985]", color: "bg-[#7dd3fc]" },
{ name: "Truffle", class: "bg-[#1c1917] text-[#e7e5e4]", color: "bg-[#44403c]" },
{ name: "Citrus", class: "bg-[#fefce8] text-[#854d0e]", color: "bg-[#fde047]" },
{ name: "Lagoon", class: "bg-[#134e4a] text-[#ccfbf1]", color: "bg-[#0d9488]" },
{ name: "Peony", class: "bg-[#fdf2f8] text-[#9d174d]", color: "bg-[#fbcfe8]" },
{ name: "Ironclad", class: "bg-[#0f172a] text-[#94a3b8]", color: "bg-[#334155]" },
{ name: "Buttermilk", class: "bg-[#fffbeb] text-[#b45309]", color: "bg-[#fde68a]" },
{ name: "Jade Garden", class: "bg-[#065f46] text-[#ecfdf5]", color: "bg-[#10b981]" },
{ name: "Raisin", class: "bg-[#2e1065] text-[#ede9fe]", color: "bg-[#5b21b6]" },
{ name: "Sunflower", class: "bg-[#fef3c7] text-[#92400e]", color: "bg-[#f59e0b]" },
{ name: "Moonlight", class: "bg-[#0f172a] text-[#f1f5f9]", color: "bg-[#1e293b]" },
{ name: "Cactus Flower", class: "bg-[#831843] text-[#fdf2f8]", color: "bg-[#db2777]" },
{ name: "Pebble", class: "bg-[#f5f5f4] text-[#57534e]", color: "bg-[#a8a29e]" },
{ name: "Atlantic", class: "bg-[#1e3a8a] text-[#dbeafe]", color: "bg-[#2563eb]" },
{ name: "Bark", class: "bg-[#422006] text-[#fef3c7]", color: "bg-[#713f12]" },
{ name: "Seafoam", class: "bg-[#ccfbf1] text-[#115e59]", color: "bg-[#5eead4]" },
{ name: "Electric Indigo", class: "bg-[#312e81] text-[#c7d2fe]", color: "bg-[#6366f1]" },
{ name: "Cinnamon", class: "bg-[#451a03] text-[#ffedd5]", color: "bg-[#92400e]" },
{ name: "Permafrost", class: "bg-[#eff6ff] text-[#1e40af]", color: "bg-[#93c5fd]" },
{ name: "Basalt", class: "bg-[#18181b] text-[#d4d4d8]", color: "bg-[#3f3f46]" },
{ name: "Tangerine", class: "bg-[#fff7ed] text-[#c2410c]", color: "bg-[#fdba74]" },
{ name: "Emerald City", class: "bg-[#064e3b] text-[#6ee7b7]", color: "bg-[#047857]" },
{ name: "Blackberry", class: "bg-[#240101] text-[#fecaca]", color: "bg-[#4c0519]" },
{ name: "Linen", class: "bg-[#fafaf9] text-[#57534e]", color: "bg-[#e7e5e4]" },
{ name: "Deep Navy", class: "bg-[#020617] text-[#38bdf8]", color: "bg-[#0f172a]" },
{ name: "Obsidian", class: "bg-[#0a0a0a] text-[#f5f5f5]", color: "bg-[#1a1a1a]" },
{ name: "Candy Apple", class: "bg-[#71091d] text-[#ffffff]", color: "bg-[#ff0800]" },
{ name: "Deep Teal", class: "bg-[#003333] text-[#e6ffff]", color: "bg-[#006666]" },
{ name: "Parchment", class: "bg-[#fcf5e5] text-[#3b3c36]", color: "bg-[#e5e4e2]" },
{ name: "Electric Moss", class: "bg-[#1a2f1a] text-[#ccff33]", color: "bg-[#4e9a06]" },
{ name: "Imperial", class: "bg-[#602320] text-[#ead8c0]", color: "bg-[#960018]" },
{ name: "Starlight", class: "bg-[#0c1445] text-[#ffd700]", color: "bg-[#1e2a78]" },
{ name: "Glacial Blue", class: "bg-[#f0faff] text-[#005073]", color: "bg-[#71c5ee]" },
{ name: "Burnt Clay", class: "bg-[#4d221c] text-[#f2d8d5]", color: "bg-[#a52a2a]" },
{ name: "Cyber Sunset", class: "bg-[#2b0032] text-[#ff71ce]", color: "bg-[#b967ff]" },
{ name: "Winter Mint", class: "bg-[#eafff5] text-[#004d3d]", color: "bg-[#a3ffd6]" },
{ name: "Old Money", class: "bg-[#1b3022] text-[#d4af37]", color: "bg-[#2d5a27]" },
{ name: "Neon Rose", class: "bg-[#1a0005] text-[#ff007f]", color: "bg-[#e0115f]" },
{ name: "Drift Ice", class: "bg-[#f3f9fb] text-[#1a3c40]", color: "bg-[#bee5eb]" },
{ name: "Volcano Ash", class: "bg-[#28282b] text-[#ff4500]", color: "bg-[#3d3d3d]" },
{ name: "Papaya", class: "bg-[#fff5ee] text-[#ff6700]", color: "bg-[#ffefd5]" },
{ name: "Deep Galaxy", class: "bg-[#0d0221] text-[#00f5d4]", color: "bg-[#261447]" },
{ name: "Matcha Mist", class: "bg-[#f1f8e9] text-[#33691e]", color: "bg-[#c5e1a5]" },
{ name: "Iron Oxide", class: "bg-[#321414] text-[#eecbcb]", color: "bg-[#8b0000]" },
{ name: "Ocean Depth", class: "bg-[#000d1a] text-[#00bfff]", color: "bg-[#002147]" },
{ name: "Velvet Moss", class: "bg-[#253529] text-[#dce2aa]", color: "bg-[#4f7942]" },
{ name: "Solar Flare", class: "bg-[#3d0c02] text-[#ffcc00]", color: "bg-[#ff8c00]" },
{ name: "Cotton Candy", class: "bg-[#fff0f5] text-[#ff69b4]", color: "bg-[#b0e0e6]" },
{ name: "Night Owl", class: "bg-[#011627] text-[#d6deeb]", color: "bg-[#1d3b53]" },
{ name: "Raw Sienna", class: "bg-[#3d2b1f] text-[#f4a460]", color: "bg-[#d2691e]" },
{ name: "Icy Violet", class: "bg-[#f8f0ff] text-[#4b0082]", color: "bg-[#e0b0ff]" },
{ name: "Coal Mine", class: "bg-[#121212] text-[#9a9a9a]", color: "bg-[#2c2c2c]" },
{ name: "Sea Salt", class: "bg-[#f8f9fa] text-[#212529]", color: "bg-[#dee2e6]" },
{ name: "Autumn Leaf", class: "bg-[#4a1c03] text-[#ffba08]", color: "bg-[#d00000]" },
{ name: "Moon Mist", class: "bg-[#e0e0e0] text-[#424242]", color: "bg-[#f5f5f5]" },
{ name: "Deep Orchid", class: "bg-[#2a0134] text-[#fbcfff]", color: "bg-[#9932cc]" },
{ name: "Safari", class: "bg-[#ede6d6] text-[#4b5320]", color: "bg-[#c2b280]" },
{ name: "Neon Carbon", class: "bg-[#000000] text-[#39ff14]", color: "bg-[#1a1a1a]" },
{ name: "Blush", class: "bg-[#fff9f9] text-[#db7093]", color: "bg-[#ffe4e1]" },
{ name: "Abyssal Blue", class: "bg-[#000511] text-[#72a0c1]", color: "bg-[#001f3f]" },
{ name: "Goldenrod", class: "bg-[#fdf5e6] text-[#8b4513]", color: "bg-[#daa520]" },
{ name: "Storm Cloud", class: "bg-[#4f4f4f] text-[#f2f2f2]", color: "bg-[#708090]" },
{ name: "Poppy", class: "bg-[#ff3800] text-[#ffffff]", color: "bg-[#801818]" },
{ name: "Evergreen", class: "bg-[#052f05] text-[#f0fff0]", color: "bg-[#013220]" },
{ name: "Breezy", class: "bg-[#f0ffff] text-[#008080]", color: "bg-[#afeeee]" },
{ name: "Rustic Wood", class: "bg-[#3b2f2f] text-[#d2b48c]", color: "bg-[#6f4e37]" },
{ name: "Electric Mint", class: "bg-[#000000] text-[#00ffcc]", color: "bg-[#16a085]" },
{ name: "Soft Lilac", class: "bg-[#faf5ff] text-[#6b21a8]", color: "bg-[#d8b4fe]" },
{ name: "Marigold", class: "bg-[#fff7ed] text-[#9a3412]", color: "bg-[#fbbf24]" },
{ name: "Charcoal Sky", class: "bg-[#1f2937] text-[#f9fafb]", color: "bg-[#374151]" },
{ name: "Pink Fizz", class: "bg-[#fff1f2] text-[#be123c]", color: "bg-[#fda4af]" },
{ name: "Blue Spruce", class: "bg-[#e0f2f1] text-[#004d40]", color: "bg-[#80cbc4]" },
{ name: "Mahogany", class: "bg-[#2d0a0a] text-[#fca5a5]", color: "bg-[#7f1d1d]" },
{ name: "Pearl", class: "bg-[#ffffff] text-[#374151]", color: "bg-[#f3f4f6] border" },
{ name: "Midnight Teal", class: "bg-[#042f2e] text-[#2dd4bf]", color: "bg-[#115e59]" },
{ name: "Creamsicle", class: "bg-[#fffaf0] text-[#ea580c]", color: "bg-[#fed7aa]" },
{ name: "Deep Indigo", class: "bg-[#1e1b4b] text-[#e0e7ff]", color: "bg-[#312e81]" },
{ name: "Cactus Flower", class: "bg-[#431407] text-[#fdba74]", color: "bg-[#9a3412]" },
{ name: "Overcast", class: "bg-[#f1f5f9] text-[#475569]", color: "bg-[#cbd5e1]" },
{ name: "Vino", class: "bg-[#450a0a] text-[#fecaca]", color: "bg-[#881337]" },
{ name: "Aqua Marine", class: "bg-[#ecfeff] text-[#0891b2]", color: "bg-[#67e8f9]" },
{ name: "Graphite Dark", class: "bg-[#18181b] text-[#a1a1aa]", color: "bg-[#27272a]" },
{ name: "Daisy", class: "bg-[#fefce8] text-[#a16207]", color: "bg-[#fef08a]" },
{ name: "Nordic Blue", class: "bg-[#1e3a8a] text-[#dbeafe]", color: "bg-[#3b82f6]" },
{ name: "Rosewood", class: "bg-[#500724] text-[#fce7f3]", color: "bg-[#9d174d]" },
{ name: "Sandstorm", class: "bg-[#fef3c7] text-[#92400e]", color: "bg-[#fcd34d]" },
{ name: "Spruce", class: "bg-[#064e3b] text-[#ecfdf5]", color: "bg-[#065f46]" },
{ name: "Wisteria", class: "bg-[#f5f3ff] text-[#5b21b6]", color: "bg-[#c4b5fd]" },
{ name: "Gravel Road", class: "bg-[#27272a] text-[#e4e4e7]", color: "bg-[#52525b]" },
{ name: "Pumpkin", class: "bg-[#fff7ed] text-[#c2410c]", color: "bg-[#ffedd5]" },
{ name: "Sea Mist", class: "bg-[#f0fdfa] text-[#0f766e]", color: "bg-[#99f6e4]" },
{ name: "Black Hole", class: "bg-[#020617] text-[#f8fafc]", color: "bg-[#000000]" },
{ name: "Apricot Cream", class: "bg-[#fffafb] text-[#9d174d]", color: "bg-[#fce7f3]" },
{ name: "Blueprint", class: "bg-[#1e3a8a] text-[#bfdbfe]", color: "bg-[#172554]" },
{ name: "Tundra", class: "bg-[#f8fafc] text-[#334155]", color: "bg-[#e2e8f0]" },
{ name: "Cinnabar", class: "bg-[#450a0a] text-[#fecaca]", color: "bg-[#ef4444]" },
{ name: "Glade", class: "bg-[#f0fdf4] text-[#166534]", color: "bg-[#bbf7d0]" },
{ name: "Dusk", class: "bg-[#0f172a] text-[#94a3b8]", color: "bg-[#1e293b]" },
{ name: "Golden Sand", class: "bg-[#fffbeb] text-[#b45309]", color: "bg-[#fef3c7]" },
{ name: "Moor", class: "bg-[#064e3b] text-[#d1fae5]", color: "bg-[#065f46]" },
{ name: "Amethyst Light", class: "bg-[#faf5ff] text-[#7e22ce]", color: "bg-[#f3e8ff]" },
{ name: "Steel Grey", class: "bg-[#18181b] text-[#fafafa]", color: "bg-[#3f3f46]" },
{ name: "Cantaloupe", class: "bg-[#fff7ed] text-[#ea580c]", color: "bg-[#fdba74]" },
{ name: "Beryl", class: "bg-[#ecfeff] text-[#155e75]", color: "bg-[#a5f3fc]" },
{ name: "Deep Charcoal", class: "bg-[#09090b] text-[#71717a]", color: "bg-[#18181b]" },
{ name: "Honey Dew", class: "bg-[#f0fff4] text-[#166534]", color: "bg-[#dcfce7]" },
{ name: "Sapphire Night", class: "bg-[#172554] text-[#dbeafe]", color: "bg-[#1e40af]" },
{ name: "Burnt Umber", class: "bg-[#431407] text-[#ffedd5]", color: "bg-[#7c2d12]" },
{ name: "Cloudy Day", class: "bg-[#f8fafc] text-[#475569]", color: "bg-[#f1f5f9]" },
{ name: "Crimson Velvet", class: "bg-[#450a0a] text-[#fee2e2]", color: "bg-[#991b1b]" },
{ name: "Aqua Ice", class: "bg-[#ecfeff] text-[#0e7490]", color: "bg-[#cffafe]" },
{ name: "Zink Dark", class: "bg-[#09090b] text-[#d4d4d8]", color: "bg-[#18181b]" },
{ name: "Sunray", class: "bg-[#fffbeb] text-[#a16207]", color: "bg-[#fde68a]" },
{ name: "Royal Purple", class: "bg-[#2e1065] text-[#ede9fe]", color: "bg-[#5b21b6]" },
{ name: "Mulled Wine", class: "bg-[#500724] text-[#fce7f3]", color: "bg-[#831843]" },
{ name: "Dune Path", class: "bg-[#fffbeb] text-[#92400e]", color: "bg-[#fef3c7]" },
{ name: "Emerald Mist", class: "bg-[#064e3b] text-[#34d399]", color: "bg-[#065f46]" },
{ name: "Lavender Petal", class: "bg-[#f5f3ff] text-[#6d28d9]", color: "bg-[#ede9fe]" },
{ name: "Slate Rock", class: "bg-[#0f172a] text-[#cbd5e1]", color: "bg-[#1e293b]" },
{ name: "Autumn Glow", class: "bg-[#451a03] text-[#fdba74]", color: "bg-[#92400e]" },
{ name: "Ice Cap", class: "bg-[#f0f9ff] text-[#0369a1]", color: "bg-[#e0f2fe]" },
{ name: "Void", class: "bg-[#020617] text-[#64748b]", color: "bg-[#000000]" },
{ name: "Wild Rose", class: "bg-[#fff1f2] text-[#e11d48]", color: "bg-[#ffe4e6]" },
{ name: "Night Ocean", class: "bg-[#172554] text-[#60a5fa]", color: "bg-[#1e3a8a]" },
{ name: "White Sand", class: "bg-[#fafaf9] text-[#78716c]", color: "bg-[#f5f5f4]" }
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