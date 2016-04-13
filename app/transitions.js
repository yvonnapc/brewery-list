export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('newevent'),
    this.use('toRight'),
    this.reverse('toLeft')
  ),
  this.transition(
    this.fromRoute('newevent'),
    this.toRoute('admin'),
    this.use('toRight'),
    this.reverse('toLeft')
  ),
  this.transition(
    this.fromRoute('admin'),
    this.toRoute('about'),
    this.use('toRight'),
    this.reverse('toLeft')
  ),
  this.transition(
    this.fromRoute('about'),
    this.toRoute('boookmarkedevent'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

}
