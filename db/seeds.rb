puts "Creating test users.."

u1 = User.create!(username: "Troy", password: "onetwo")
u2 = User.create!(username: "Bono", password: "oneone")
u3 = User.create!(username: "Claire Manix", password: "onethree")

puts "Creating test patients.."
p1= Patient.create!(name: 123, goal: "Stepping", mmt: "Knee Flexion= 3/5, Knee Extension = 3/5, Dorsiflexion = 1/5, Plantarflexion = 2/5", user_id: u1.id)
p2= Patient.create!(name: 456, goal: "Full Gait Cycles", mmt: "Knee Flexion= 2/5, Knee Extension = 1/5, Dorsiflexion = 0/5, Plantarflexion = 1/5", user_id: u3.id)
p3= Patient.create!(name: 650, goal: "Stepping", mmt: "Knee Flexion= 2/5, Knee Extension = 4/5, Dorsiflexion = 1/5, Plantarflexion = 1/5", user_id: u1.id)
p4= Patient.create!(name: 12, goal: "Full Gait Cycles", mmt: "Knee Flexion= 3/5, Knee Extension = 3/5, Dorsiflexion = 1/5, Plantarflexion = 2/5", user_id: u2.id)
p5= Patient.create!(name: 35, goal: "Standing", mmt: "Knee Flexion= 3/5, Knee Extension = 3/5, Dorsiflexion = 1/5, Plantarflexion = 2/5", user_id: u2.id)
p6= Patient.create!(name: 55, goal: "Stepping", mmt: "Knee Flexion= 2/5, Knee Extension = 4/5, Dorsiflexion = 1/5, Plantarflexion = 1/5", user_id: u3.id)
p7= Patient.create!(name: 50, goal: "Full Gait Cycles", mmt: "Knee Flexion= 3/5, Knee Extension = 3/5, Dorsiflexion = 1/5, Plantarflexion = 2/5", user_id: u1.id)
p8= Patient.create!(name: 90, goal: "Full Gait Cycles", mmt: "Knee Flexion= 2/5, Knee Extension = 1/5, Dorsiflexion = 0/5, Plantarflexion = 1/5", user_id: u3.id)
p9= Patient.create!(name: 42, goal: "Full Gait Cycles", mmt: "Knee Flexion= 3/5, Knee Extension = 3/5, Dorsiflexion = 1/5, Plantarflexion = 2/5", user_id: u2.id)
p10= Patient.create!(name: 999, goal: "Full Gait Cycles", mmt: "Knee Flexion= 2/5, Knee Extension = 4/5, Dorsiflexion = 1/5, Plantarflexion = 1/5", user_id: u2.id)

puts "Creating test devices.."
Device.create!(ankle_angle: 5, sva: "10-12", brace: "Solid AFO with Fixed MPTJ", footwear: "Negative Heel with Optimised Position Rocker Sole", patient_id: p3.id)
Device.create!(ankle_angle: 3, sva: "14-15", brace: "Solid AFO with Free MPTJ", footwear: "Plain Heel with Flat/Rounded Sole", patient_id: p4.id)
Device.create!(ankle_angle: 10, sva: "10-12", brace: "Solid AFO with Free MPTJ", footwear: "Plain Heel with Flat/Rounded Sole", patient_id: p7.id)
Device.create!(ankle_angle: 12, sva: "15-19", brace: "Solid AFO with Free MPTJ", footwear: "Positive Heel with Optimised Position Point Loading Rocker Sole", patient_id: p8.id)
Device.create!(ankle_angle: 15, sva: "14-15", brace: "Solid AFO with Free MPTJ", footwear: "Negative Heel with Flat/Rounded Sole", patient_id: p10.id)
Device.create!(ankle_angle: 3, sva: "14-15", brace: "Solid AFO with Fixed MPTJ", footwear: "Negative Heel with Optimised Position Point Loading Rocker Sole", patient_id: p2.id)
Device.create!(ankle_angle: 10, sva: "10-12", brace: "Solid AFO with Fixed MPTJ", footwear: "Positive Heel with Optimised Position Rocker Sole", patient_id: p1.id)
Device.create!(ankle_angle: 5, sva: "14-15", brace: "Solid AFO with Free MPTJ", footwear: "Plain Heel with Optimised Position Point Loading Rocker Sole", patient_id: p6.id)
Device.create!(ankle_angle: 3, sva: "10-12", brace: "Articulated AFO", footwear: "Plain Heel Optimised Position Rocker Sole", patient_id: p5.id)
Device.create!(ankle_angle: 8, sva: "15-19", brace: "Articulated AFO", footwear: "Negative Heel Optimised Position Point Loading Rocker Sole", patient_id: p1.id)

puts "Seeding done!"