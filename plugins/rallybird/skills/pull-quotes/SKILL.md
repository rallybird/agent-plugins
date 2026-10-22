---
name: pull-quotes
description: Pull verbatim customer quotes from Rallybird for a topic, each with a short judgement of why it is worth using. Use for "give me three quotes about reliability", "a quote from a telecom company using the product at scale", "the best quote for a skeptical engineering buyer".
---

<!-- Generated from rallybird/app (app/agent_skills). Do not edit here: changes are overwritten on the next publish. -->

# Pulling quotes

1. Search find_proof with content_type="quotes". Put the topic in the query and
   any profile in filters (customer_ids from find_companies, or
   firmographic_industries, speaker_roles, sentiment) in the same call. A named
   customer goes in customer_ids, not the query.
2. If that comes back thin, drop the topic, list the profile's quotes, and pick
   the best match yourself. When the answer is one example per company, list
   without a query and pass per_customer_limit=1.
3. Prefer quotes with a named speaker. Show a few strong matches unless asked
   for more.

## What a good answer contains

- The quote's source text exactly as returned: no paraphrase, stitching or
  ellipses.
- For each quote, an editor's judgement of what it proves and who it suits (for
  example, "Strong validation of self-serve onboarding for a lean team"), not a
  summary or restatement of the quote.
- Attribution only from what the result returned: speaker_name, speaker_role and
  the customer.
- If no verbatim quote fits, say so and name the closest evidence.
