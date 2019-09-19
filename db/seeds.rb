10.times do
  dep = Department.create(
    name: Faker::Commerce.department
    )
  50.times do
    dep.products.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence,
      price: Faker::Commerce.price.to_f,
    )
  end
end

puts "25 departments seeded 100 items seeded per department"