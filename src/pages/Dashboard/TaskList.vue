<template>
  <base-table  :data="isRTL ? tableDataAr : tableData"
              thead-classes="text-primary">
    <template slot-scope="{row}">
      <td>
        <base-checkbox v-model="row.done">
        </base-checkbox>
      </td>
      <td class="text-left">
        <p class="title">{{row.title}}</p>
        <p class="text-muted">{{row.description}}</p>
      </td>
      <td class="td-actions text-right">
        <base-button type="link" artia-label="edit button">
          <i class="tim-icons icon-pencil"></i>
        </base-button>
      </td>
    </template>
  </base-table>
</template>
<script>

  import BaseButton from '@/components/BaseButton';
  import BaseTable from '@/components/BaseTable';
  import BaseCheckbox from '@/components/BaseCheckbox';

  export default {
    components: {
      BaseButton,
      BaseTable,
      BaseCheckbox
    },
    data(){
      return{
        tableData:[
          {
            title: "Update the Documentation",
            description: "Dwuamish Head, Seattle, WA 8:47 AM",
            done: false
          },
          {
            title: "GDPR Compliance",
            description: "The GDPR is a regulation that requires businesses to protect the personal data and privacy of Europe citizens for transactions that occur within EU member states.",
            done: true
          },
          {
            title: "Solve the issues",
            description: "Fifty percent of all respondents said they would be more likely to shop at a company",
            done: false
          },
          {
            title: "Release v2.0.0",
            description: "Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM",
            done: false
          },
          {
            title: "Export the processed files",
            description: "The report also shows that consumers will not easily forgive a company once a breach exposing their personal data occurs.",
            done: false
          },
          {
            title: "Arival at export process",
            description: "Capitol Hill, Seattle, WA 12:34 AM",
            done: false
          }
        ],
        tableDataAr:[
          {
            title: "مركز معالجة موقع محور",
            description: "نص آخر هناالوثائق",
            done: false
          },
          {
            title: "لامتثال GDPR",
            description: "الناتج المحلي الإجمالي هو نظام يتطلب من الشركات حماية البيانات الشخصية والخصوصية لمواطني أوروبا بالنسبة للمعاملات التي تتم داخل الدول الأعضاء في الاتحاد الأوروبي.",
            done: true
          },
          {
            title: "القضاياالقضايا",
            description: "سيكونونقال 50٪ من جميع المستجيبين أنهم سيكونون أكثر عرضة للتسوق في شركة",
            done: false
          },
          {
            title: "تصدير الملفات التي تمت معالجتها",
            description: "كما يبين التقرير أن المستهلكين لن يغفروا شركة بسهولة بمجرد حدوث خرق يعرض بياناتهم الشخصية.",
            done: false
          },
          {
            title: "الوصول إلى عملية التصدير",
            description: "سياسة السيء إنطلاق في قبل, مساعدة والمانيا أخذ قد. بل أما أمام ماشاء الشتاء،, تكاليف الإقتصادي بـ حين. ٣٠ يتعلّق للإتحاد ولم, وتم هناك مدينة بتحدّي إذ, كان بل عمل",
            done: false
          },
          {
            title: "الافراج عن v2.0.0",
            description: "عن رئيس طوكيو البولندي لمّ, مايو مرجع وباءت قبل هو, تسمّى الطريق الإقتصادي ذات أن. لغات الإطلاق الفرنسية دار ان, بين بتخصيص الساحة اقتصادية أم. و الآخ",
            done: false
          }
        ]
      }
    },
    computed: {
      isRTL() {
        return this.$rtl.isRTL;
      }
    }
  }
</script>
<style>
</style>
