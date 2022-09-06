<script setup>
import '../../dist/style.css';
import JButton from '../../src/components/JButton/JButton.vue';

</script>

# Normal Buttons

<div class="flex flex-col gap-5 pt-10">
    <div class="flex items-center gap-5">
        <JButton variant="primary">Primary </JButton>
        <JButton variant="secondary">Secondary </JButton>
        <JButton variant="success">Success </JButton>
        <JButton variant="danger">Danger </JButton>
        <JButton variant="warning">Warning </JButton>
        <JButton variant="info">Info </JButton>
        <JButton variant="dark">Danger </JButton>
    </div>
    <div class="space-x-4">
        <JButton>Default Button </JButton>
        <JButton variant="primary" disabled>Primary (Disabled)</JButton>
    </div>
</div>

```html
<JButton>Default Button</JButton>
<JButton variant="primary">Primary</JButton>
<JButton variant="secondary">Secondary</JButton>
<JButton variant="success">Success</JButton>
<JButton variant="danger">Danger</JButton>
<JButton variant="warning">Warning</JButton>
<JButton variant="info">Info</JButton>
<JButton variant="dark">Danger</JButton>

<!-- Other States -->
<JButton variant="primary" disabled>Primary (Disabled)</JButton>
```

## Outlined Buttons

> Coming soon.


## Rounded Buttons
> Coming soon.

## Soft Buttons
> Coming soon.

## Gradient Buttons
> Coming soon.

## Animation Buttons
> Coming soon.

## Buttons with Icons
> Coming soon.


