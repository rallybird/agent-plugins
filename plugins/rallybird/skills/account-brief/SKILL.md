---
name: account-brief
description: Build a brief on one customer or one person from Rallybird, covering the profile, the people in the sources, and supported proof highlights. Use for "tell me about this customer", "who is this person?", "what has this person said?", "give me a rundown on this account".
---

<!-- Generated from rallybird/app (app/agent_skills). Do not edit here: changes are overwritten on the next publish. -->

# Account and person briefs

A narrow question ("what's their email?", "where is the company headquartered?")
gets a sentence, not a brief.

## A company

1. Resolve the name or domain with find_companies, then read get_company for its
   profile and the people in the sources.
2. Use find_proof filtered by customer_ids for a few supported highlights about
   how it uses the product; open a story with get_proof if the excerpt is not
   enough.
3. Lead with who the company is, then only the sections the results support:
   what it does, its size, location and industries; the people in the sources;
   and how it uses the product. People are associated with the proof, not an
   exhaustive or necessarily current staff directory.

## A person

1. Resolve the name with find_people, then read get_person by its person_id.
2. To find what they said, use find_proof with customer_ids=[their customer_id]
   and content_type="quotes". Keep results whose speaker_id is theirs, or whose
   speaker_name matches when no id is present. If no quote is found, the
   get_person description can supply context that has no quote behind it; say
   so.
3. Lead with who they are and where, naming the company. If enrichment.moved is
   true, say they appear to have moved to current_company and treat the story
   title as historical. Include only the profile fields returned (title,
   company, location, email, LinkedIn), then one to three supported highlights;
   leave the highlights out if none are supported.

Never invent employees, titles or contact details when none were returned.
