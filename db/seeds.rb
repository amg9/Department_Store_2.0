25.times do
  dep = Department.create(
    name: Faker::Commerce.department
    )
  100.itmes do
    dep.items.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence,
      price: Faker::Commerce.price.to_f,,
      available: Faker::Boolean.boolean
    )
  end
end

puts "25 departments seeded 100 items seeded per department"