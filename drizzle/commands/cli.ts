import { seed } from '@/drizzle/commands/seed'
import { migrate } from '@/drizzle/commands/migrate'
import { truncate } from '@/drizzle/commands/truncate'
import { connection } from '@/drizzle/db'

import * as dotenv from 'dotenv'
import { generateMock } from './seed-generate-mock'

dotenv.config()

var argv: PotentialArgs = require('minimist')(process.argv.slice(2));

async function run() {
    if (isTest(argv)) {
        // .gitkeep - for running simple test code when experimenting
       help("Nothing to test...") 
    } else if (isSeedArgs(argv)) {
        if (argv.generate) {
            await generateMock()
        }
        await seed()
    } else if (isMigrateArgs(argv)) {
        await migrate()
    } else if (isTruncateArgs(argv)) {
        await truncate()
    } else {
        help("Unknown commands supplied.")
    }

    await connection.end()
}

/**
 * Prints out the help documentation for running the simple cli commands
 * @param message Additional message to print
 */
function help(message?: string) {
    if (message) {
        console.log(message)
        console.log("")
    }
    
    console.log("Commands               Flags")
    console.log("")
    console.log("    seed               ")
    console.log("                       --generate boolean")
    console.log("")
    console.log("    migrate                           ")
    console.log("")
    console.log("    truncate                          ")
}

run()


function isTest(args: PotentialArgs): args is TestArgs {
    return args._[0] === 'test' && args._.length === 1
}
function isSeedArgs(args: PotentialArgs): args is SeedArgs {
    return args._[0] === 'seed' && args._.length === 1
}
function isMigrateArgs(args: PotentialArgs): args is MigrateArgs {
    return args._[0] === 'migrate' && args._.length === 1
}
function isTruncateArgs(args: PotentialArgs): args is TruncateArgs {
    return args._[0] === 'truncate' && args._.length === 1
}

type SeedCommand = ['seed']
type MigrateCommand = ['migrate']
type TestCommand = ['test']
type TruncateCommand = ['truncate']
type PotentialCommands = SeedCommand | MigrateCommand | TestCommand | TruncateCommand

type SeedArgs = {
    _: SeedCommand,
    generate?: boolean
}
type MigrateArgs = {
    _: MigrateCommand,
}
type TestArgs = {
    _: TestCommand,
}
type TruncateArgs = {
    _: TruncateCommand,
}
type PotentialArgs = SeedArgs | MigrateArgs | TestArgs | TruncateArgs
