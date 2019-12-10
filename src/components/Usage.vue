<template>
  <div>
    <TemplateScriptStyles />
    <TemplateScript />
    <OnlyTemplate />
    <OnlyScript />
    <ScriptStyles />
  </div>
</template>

<script>
import OnlyTemplate from './OnlyTemplate';
import TemplateScriptStyles from './TemplateScriptStyles';
import TemplateScript from './TemplateScript';
import OnlyScript from './OnlyScript';
import ScriptStyles from './ScriptStyles';

export default {
    name: 'AppHome',
    components: {
        OnlyTemplate,
        TemplateScriptStyles,
        TemplateScript,
        OnlyScript,
        ScriptStyles
    }
};
</script>
