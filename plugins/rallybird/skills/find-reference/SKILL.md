---
name: find-reference
description: Choose the best customer reference, or a ranked shortlist, for a buyer using Rallybird proof, or find who to talk to about a topic. Use for "who should I put in front of a fintech buyer?", "best reference for reliability", "which customer can I speak to about SSO?".
---

<!-- Generated from rallybird/app (app/agent_skills). Do not edit here: changes are overwritten on the next publish. -->

# Finding a reference

A reference is a customer, ideally with a named person on record. Gather
candidates before judging them.

1. Split the request into the buyer's profile (industry, region, size) and their
   concern (reliability, SSO, a specific SDK). A request with no buyer, such as
   "who can I speak to about SSO?", has only a concern.
2. Find the profile with find_companies (industry and its firmographic facets),
   or the same filters on find_proof. Then search find_proof for the concern
   within those customers, plus a variant or two. Issue independent calls
   together.
3. Find the people. Search find_proof with content_type="quotes" for the
   strongest candidates, or for the concern alone when there is no buyer. A
   quote's speaker_name, speaker_role and speaker_id say who is on record. If
   few quotes come back, search without content_type and open the best stories
   with get_proof for the people they profile. Use get_person for contact
   details only when asked.
4. Compare candidates on how closely they match the buyer, how specific their
   evidence is (a metric beats a claim), and whether someone is on record.

## What a good answer contains

- One best reference, with its champion named when known; two or three reasons
  it fits, each supported by a returned record; one or two honest caveats (a
  different segment, no metric); and up to two runners-up.
- If candidates tie, say so and rank them, at most five, strongest first.
- If even the closest candidate misses the buyer's segment or core concern, say
  so and name the nearest options rather than forcing a pick.
- Never invent willingness to take a call. A person's role is the role in the
  sources, and they may have moved on.
