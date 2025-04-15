# sb_crank_feeds

To run

```bash
bun i
bun run index.ts
```

Example output:

```
❯ bun run index.ts

Loaded Switchboard Program: SBondMDrcV3K4kxZR1HNVT7osZxAHVHgYXL5Ze1oMUv
Using queue A43DyUGA7s8eXPxqEjJY6EBu1KKbNgfxF8h17VAHn13w

Retrieved response from oracles:
{
  median_responses: [
    {
      value: "729977429674243686511",
      feed_hash: "1df13672eed42268119057177b30b2f285ffe147cce6e6504be95072a1d9926d",
    }
  ],
  oracle_responses: [
    {
      oracle_pubkey: "405a6ee0581e9bb6037232cfc7318590752f05f769821aa7c18bcd2edf291e89",
      eth_address: "a7ab61dc17df2de6c11e761e672f2317e69298ed",
      signature: "BYGYwbiNuTDe3LMXbXZ7bWuKOdKb3/pBEoWT5J9kULUIuWqlWldY7dwYm4e3jYWWUtttVFfmaX0HviuffXmy6Q==",
      checksum: "FBqosWINFS9vNJTPOqsV/t9i7Ip1LAbrvgvMuGRT7zQ=",
      recovery_id: 1,
      feed_responses: [
        [Object ...]
      ],
      errors: [ null ],
    }, {
      oracle_pubkey: "49519d81046597f86c4cc529195900eab598b817a61759bc54660924a84522ea",
      eth_address: "4a8e54e055b4e95cdceabc3b7a29f2f9617990a9",
      signature: "RIL1NJveycy7Nz/3e48BZdkC6zfHine4FQ76fJCoJ7IJs9TrZe3xobKuKbDvWytlHkwPiYo1tAOOj+WPdeCSCQ==",
      checksum: "FBqosWINFS9vNJTPOqsV/t9i7Ip1LAbrvgvMuGRT7zQ=",
      recovery_id: 0,
      feed_responses: [
        [Object ...]
      ],
      errors: [ null ],
    }
  ],
}

Compiled transaction w/ 4 instructions...
```
