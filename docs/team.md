<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/anburocky3.png',
    name: 'Anbu selvan',
    title: 'Product Lead',
    links: [
      { icon: 'github', link: 'https://github.com/anburocky3' },
      { icon: 'twitter', link: 'https://twitter.com/anbuselvanrocky' }
    ]
  },
    {
    avatar: 'https://www.github.com/yogesh7401.png',
    name: 'Yogeshwaran',
    title: 'Software Engineer',
    links: [
      { icon: 'github', link: 'https://github.com/yogesh7401' },
      { icon: 'twitter', link: 'https://twitter.com/yogesh7401' }
    ]
  },
]
</script>

# Our Wonderful Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />