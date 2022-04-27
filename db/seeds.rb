puts "Creating test users.."

u1 = User.create!(username: "Troy", password: "onetwo")
u2 = User.create!(username: "Bono", password: "oneone")
u3 = User.create!(username: "Claire Manix", password: "onethree")

puts "Creating test patients.."
p1= Patient.create!(name: 123, user_id: u1.id)
p2= Patient.create!(name: 456, user_id: u3.id)
p3= Patient.create!(name: 650, user_id: u1.id)
p4= Patient.create!(name: 12, user_id: u2.id)
p5= Patient.create!(name: 35, user_id: u2.id)
p6= Patient.create!(name: 55, user_id: u3.id)
p7= Patient.create!(name: 50, user_id: u1.id)
p8= Patient.create!(name: 90, user_id: u3.id)
p9= Patient.create!(name: 42, user_id: u2.id)
p10= Patient.create!(name: 999, user_id: u2.id)

puts "Creating test devices.."
Device.create!(ankle_angle: 5, sva: "10-12", type: "SAFO", footwear: "Rocker Sole", patient_id: p3.id)
Device.create!(ankle_angle: 3, sva: "14-15", type: "SAFO with Free MPTJ", footwear: "Flat/Rounded Sole", patient_id: p4.id)
Device.create!(ankle_angle: 10, sva: "10-12", type: "SAFO", footwear: "Flat/Rounded Sole", patient_id: p7.id)
Device.create!(ankle_angle: 12, sva: "15-19", type: "SAFO with Free MPTJ", footwear: "Point Loading Rocker", patient_id: p8.id)
Device.create!(ankle_angle: 15, sva: "14-15", type: "SAFO with Free MPTJ", footwear: "Negative Heel", patient_id: p10.id)
Device.create!(ankle_angle: 3, sva: "14-15", type: "SAFO with Fixed MPTJ", footwear: "Negative Heel", patient_id: p2.id)
Device.create!(ankle_angle: 10, sva: "10-12", type: "SAFO", footwear: "Rocker Sole", patient_id: p1.id)
Device.create!(ankle_angle: 5, sva: "14-15", type: "SAFO", footwear: "Plain Heel", patient_id: p6.id)
Device.create!(ankle_angle: 3, sva: "10-12", type: "SAFO", footwear: "Rocker Sole", patient_id: p5.id)
Device.create!(ankle_angle: 8, sva: "15-19", type: "Articulated AFO", footwear: "Negative Heel", patient_id: p1.id)

puts "Seeding done!"