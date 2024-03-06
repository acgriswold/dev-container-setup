import { seed } from '@/drizzle/commands/seed'
import { migrate } from '@/drizzle/commands/migrate'
import { connection } from '@/drizzle/db'

import * as dotenv from 'dotenv'
dotenv.config()

var argv: PotentialArgs = require('minimist')(process.argv.slice(2));

async function run() {
    if (isSeedArgs(argv)) {
        await seed(argv.clear)
    } else if (isMigrateArgs(argv)) {
        await migrate()
    } else {
        console.log("Unknown commands supplied.")
        console.log("")
        console.log("Commands               Flags")
        console.log("")
        console.log("    seed               --clear boolean")
        console.log("    migrate                           ")
    }

    await connection.end()
}

run()

function isSeedArgs(args: PotentialArgs): args is SeedArgs {
    return args._[0] === 'seed'
}
function isMigrateArgs(args: PotentialArgs): args is MigrateArgs {
    return args._[0] === 'migrate'
}

type SeedCommand = [ 'seed' ]
type MigrateCommand = [ 'migrate' ]
type PotentialCommands = SeedCommand | MigrateCommand

type SeedArgs = {
    _: SeedCommand,
    clear?: boolean,
}
type MigrateArgs = {
    _: MigrateCommand,
}
type PotentialArgs = SeedArgs | MigrateArgs
