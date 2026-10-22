---
title: Tools
description: The six read-only tools the Rallybird MCP server provides.
---

Six read-only tools. Results are excerpts with an `id`; pass an `id` to
`get_proof` to read the whole source. Page long lists with a `cursor`.

## find_proof

Search or list customer proof. With a `query`, it returns passages ranked by
relevance. Without one, it lists every record matching the filters (at least one
filter is required) with a `total`.

- `query`: what to search for. Don't put a customer's name here; resolve it with
  `find_companies` and pass `customer_ids`.
- `content_type`: `quotes`, `stories`, `reviews`, `metrics` or `all`. `reviews`
  are G2 reviews of your own product and are not tied to a customer; `all`
  excludes them.
- `customer_ids`, `speaker_roles`, `industry`, firmographic industries and
  regions, and employee-count bounds to narrow results.
- `sentiment`, `topics`, `sources` and `include_anonymous` to filter quotes.
- `cursor` and `limit`.

## find_companies

Look up your customers by name or by firmographic facet (industry, region,
employee-count range). Each row includes headquarters, headcount estimate,
industries and proof counts.

## find_people

Look up named individuals, such as quoted speakers, by name or title, optionally
limited to certain customers.

## get_company

One customer's profile: description, domain, industries, proof counts, people,
and firmographics such as employee and revenue estimates, headquarters and
founding year. Firmographics are empty until enrichment has finished.

## get_person

One person's profile: name, title, employer and story count. When Rallybird has
a confident match it also includes contact data from an outside people database,
and whether the person appears to have moved to a new company.

## get_proof

The full text of one record. Long sources are returned in pages; follow
`next_cursor` until it is empty.
