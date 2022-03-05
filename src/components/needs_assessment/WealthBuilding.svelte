<script lang="ts">
    import l from '../../localisation';
    import FormField from '@smui/form-field';
    import Radio from '@smui/radio';
    import InvestmentGoalComponent from './InvestmentGoalComponent.svelte';
    import OpenCloseToggle from '../OpenCloseToggle.svelte';
    import ExperienceComponent from './ExperienceComponent.svelte';
    import { NeedsAssessmentType } from './NeedsAssessmentType';

    export let assessment: NeedsAssessmentType;
</script>

<h3 class="mdc-typography--headline5">{$l.needsAssessment.wealthBuilding.plannedInvestmentGoals}</h3>
<div class="investment-container">
    <InvestmentGoalComponent bind:goal={assessment.wealthBuilding.retirementProvision} label={$l.needsAssessment.wealthBuilding.retirementProvision}/>
    <InvestmentGoalComponent bind:goal={assessment.wealthBuilding.saveBig} label={$l.needsAssessment.wealthBuilding.saveBig}/>
    <InvestmentGoalComponent bind:goal={assessment.wealthBuilding.saveEducation} label={$l.needsAssessment.wealthBuilding.saveEducation}/>
    <InvestmentGoalComponent bind:goal={assessment.wealthBuilding.otherInvestmentGoal} label={$l.needsAssessment.wealthBuilding.otherInvestmentGoal}/>
    <InvestmentGoalComponent bind:goal={assessment.wealthBuilding.alreadyInvested} label={$l.needsAssessment.wealthBuilding.alreadyInvested}/>
</div>
<h3 class="mdc-typography--headline5">{$l.needsAssessment.wealthBuilding.plannedInvestmentPeriod}</h3>
<FormField>
    <Radio bind:group={assessment.wealthBuilding.plannedInvestmentPeriod} value="upToFiveYears" touch />
    <span slot="label">{$l.needsAssessment.wealthBuilding.investmentPeriodOptions.upToFiveYears}</span>
</FormField>
<FormField>
    <Radio bind:group={assessment.wealthBuilding.plannedInvestmentPeriod} value="fiveToTwentyYears" touch />
    <span slot="label">{$l.needsAssessment.wealthBuilding.investmentPeriodOptions.fiveToTwentyYears}</span>
</FormField>
<FormField>
    <Radio bind:group={assessment.wealthBuilding.plannedInvestmentPeriod} value="moreThanTwentyYears" touch />
    <span slot="label">{$l.needsAssessment.wealthBuilding.investmentPeriodOptions.moreThanTwentyYears}</span>
</FormField>
<h3 class="mdc-typography--headline5">{$l.needsAssessment.wealthBuilding.plannedMethodOfPayment}</h3>
<div class="investment-container">
    <InvestmentGoalComponent bind:goal={assessment.wealthBuilding.paymentOnce} label={$l.needsAssessment.wealthBuilding.paymentOnce} />
    <InvestmentGoalComponent bind:goal={assessment.wealthBuilding.paymentMonthly} label={$l.needsAssessment.wealthBuilding.paymentMonthly} />
    <InvestmentGoalComponent bind:goal={assessment.wealthBuilding.paymentYearly} label={$l.needsAssessment.wealthBuilding.paymentYearly} />
</div>
<h3 class="mdc-typography--headline5">{$l.needsAssessment.subtitles.experiences}</h3>
<div class="experience-container">
{#each assessment.experiences as experience}
    <ExperienceComponent {experience}/>
{/each}
</div>
<h3 class="mdc-typography--headline5">{$l.needsAssessment.wealthBuilding.riskTolerance}</h3>
<FormField>
    <Radio bind:group={assessment.wealthBuilding.riskLevel} value="veryHigh" touch />
    <span slot="label">
        <span class="risk_title">{$l.needsAssessment.wealthBuilding.veryHigh.name}</span>
        <span class="risk_desc">{$l.needsAssessment.wealthBuilding.veryHigh.description}</span>
    </span>
</FormField>
<FormField>
    <Radio bind:group={assessment.wealthBuilding.riskLevel} value="high" touch />
    <span slot="label">
        <span class="risk_title">{$l.needsAssessment.wealthBuilding.high.name}</span>
        <span class="risk_desc">{$l.needsAssessment.wealthBuilding.high.description}</span>
    </span>
</FormField>
<FormField>
    <Radio bind:group={assessment.wealthBuilding.riskLevel} value="medium" touch />
    <span slot="label">
        <span class="risk_title">{$l.needsAssessment.wealthBuilding.medium.name}</span>
        <span class="risk_desc">{$l.needsAssessment.wealthBuilding.medium.description}</span>
    </span>
</FormField>
<FormField>
    <Radio bind:group={assessment.wealthBuilding.riskLevel} value="low" touch />
    <span slot="label">
        <span class="risk_title">{$l.needsAssessment.wealthBuilding.low.name}</span>
        <span class="risk_desc">{$l.needsAssessment.wealthBuilding.low.description}</span>
    </span>
</FormField>

<style lang="scss">
    @use '@material/typography/index' as typography;
    .risk_title {
        @include typography.typography('headline6');
        display: block;
        padding-top: 10px;
    }
    .risk_desc {
        display: block;
        padding-bottom: 10px;
    }
    .investment-container {
        display: flex;
        flex-direction: column;
    }
    .experience-container {
        padding-left: 20px;
    }
</style>