import { db, tables } from '$/db/index.ts'

async function main() {
  await db
    .insert(tables.usersTable)
    .values([
      {
        name: 'Alice',
        age: 28,
        email: 'alice@example.com',
      },
    ])
    .onConflictDoUpdate({
      target: [tables.usersTable.email],
      set: {
        name: 'Alice',
        age: 28,
      },
    })

  console.log('Seeding completed.')
}

main()
