# sb_crank_feeds

To run

```bash
bun i
bun run index.ts
```

Example output:

```
❯ bun run index.ts

Loaded Switchboard Program: Aio4gaXjXzJNVLtzwtNVmSqGKpANtXhybbkhtAC94ji2

Retrieved response from oracles:
{
  median_responses: [
    {
      value: "5854420000000000000",
      feed_hash: "4baa3880968a8a2320ac4541483e037a7f480bc953af2afd45496a7ad13d757e",
    },
    {
      value: "19210000000000000",
      feed_hash: "0056b85966202800d1bc2d086d244269ecab811c2c9dba61014a6603400cad20",
    }
  ],
  oracle_responses: [
    {
      oracle_pubkey: "472b0a2a4d2e2b51e9601faf3e6336605f5d823787c94e94b2caae9a2a74fe9b",
      eth_address: "b008ed0e5706e7fdb4027cba2d6d78a5c455bc86",
      signature: "8WTdAd+G/qzVL4tCOa1nlO3YAu+LVVlFD3D3umk3MN4euuJW/gRaKs1z18Gu9tCQHuHzQVq7wOPXSwbNntXIOw==",
      checksum: "A37r493OrGJ10Yfh0CgYuwFb2MVsLZCT4ZcDYf5x+EU=",
      recovery_id: 1,
      feed_responses: [
        [Object ...], [Object ...], [Object ...]
      ],
      errors: [ "Error: Ok(Ok(Err(NoResultsError: [\"Error running task: TaskError: expected value at line 1 column 1\"]\n\nStack backtrace:\n   0: anyhow::kind::Adhoc::new\n   1: rust_feeds_oracle::pull_service::oracle::feed_fetch::FeedEvalRequest::actuate_inner::{{closure}}::{{closure}}\n   2: tokio::runtime::task::core::Core<T,S>::poll\n   3: tokio::runtime::task::harness::Harness<T,S>::poll\n   4: tokio::runtime::scheduler::current_thread::Context::enter\n   5: tokio::runtime::context::scoped::Scoped<T>::set\n   6: tokio::runtime::scheduler::current_thread::CoreGuard::block_on\n   7: tokio::runtime::context::runtime::enter_runtime\n   8: std::sys::backtrace::__rust_begin_short_backtrace\n   9: core::ops::function::FnOnce::call_once{{vtable.shim}}\n  10: std::sys::pal::unix::thread::Thread::new::thread_start\n  11: <unknown>\n  12: <unknown>)))",
        null, null
      ],
    }, {
      oracle_pubkey: "bee308f4e0a81d30efaff2c79a091b2c7ff620f80a53f771426e7e575f0b1670",
      eth_address: "647748da8e3c2c57a1a57a706cfea16a2624059f",
      signature: "eVpB+3EDwps/SqywhVYYgDJy1O2hxo72iS6DNL1+SgBcZpuN96N01pjkM9lrEWGgMtk1bjx42AC/xo6Fa08gdQ==",
      checksum: "A37r493OrGJ10Yfh0CgYuwFb2MVsLZCT4ZcDYf5x+EU=",
      recovery_id: 0,
      feed_responses: [
        [Object ...], [Object ...], [Object ...]
      ],
      errors: [ "Error: Ok(Ok(Err(NoResultsError: [\"Error running task: TaskError: expected value at line 1 column 1\"]\n\nStack backtrace:\n   0: anyhow::kind::Adhoc::new\n   1: rust_feeds_oracle::pull_service::oracle::feed_fetch::FeedEvalRequest::actuate_inner::{{closure}}::{{closure}}\n   2: tokio::runtime::task::core::Core<T,S>::poll\n   3: tokio::runtime::task::harness::Harness<T,S>::poll\n   4: tokio::runtime::scheduler::current_thread::Context::enter\n   5: tokio::runtime::context::scoped::Scoped<T>::set\n   6: tokio::runtime::scheduler::current_thread::CoreGuard::block_on\n   7: tokio::runtime::context::runtime::enter_runtime\n   8: std::sys::backtrace::__rust_begin_short_backtrace\n   9: core::ops::function::FnOnce::call_once{{vtable.shim}}\n  10: std::sys::pal::unix::thread::Thread::new::thread_start\n  11: <unknown>\n  12: <unknown>)))",
        null, null
      ],
    }
  ],
}

Compiled transaction w/ 4 instructions...
```
