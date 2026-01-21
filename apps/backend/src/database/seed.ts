import { Drizzle, Tables } from '@backend/db'

async function main() {
  await Drizzle.insert(Tables.User)
    .values([
      {
        name: 'Alice',
        age: 28,
        email: 'alice@example.com',
      },
    ])
    .onConflictDoUpdate({
      target: [Tables.User.email],
      set: {
        name: 'Alice',
        age: 28,
      },
    })

  console.log('Seeding completed.')
}

main()
